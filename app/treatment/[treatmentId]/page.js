"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import { diseaseData } from "@/data/diseaseContent";

const EMAILJS_SERVICE_ID = "service_nx91wke";
const EMAILJS_TEMPLATE_ID = "template_loos9xj";
const EMAILJS_PUBLIC_KEY = "k3ORwrN11DA_MndsG";

const EYE_VIEWS = {
    front: "/images/photos/front.png",
    side: "/images/photos/side.png",
    back: "/images/photos/back.png",
};

const VIEW_LABELS = {
    front: "Anterior Segment",
    side: "Cross-Section View",
    back: "Posterior / Fundus",
};

const IMAGE_PADDING_PX = 8;

function RichText({ text = "" }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <>
            {parts.map((part, i) =>
                part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={i} className="font-semibold text-white">
                        {part.slice(2, -2)}
                    </strong>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}

export default function TreatmentPage() {
    const { treatmentId } = useParams();
    const d = diseaseData?.[treatmentId];

    if (!d) {
        notFound();
    }

    const view = d.view === "front" || d.view === "back" ? d.view : "side";
    const hotspot = d.hotspot ?? { x: 50, y: 50 };
    const anchor = { x: 80, y: 20 };

    const [openFaq, setOpenFaq] = useState(0);
    const [form, setForm] = useState({ name: "", phone: "", treatment: d?.name || "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (d?.name) {
            setForm((f) => ({ ...f, treatment: d.name }));
        }
    }, [d]);

    const imgWrapRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
    const [naturalSize, setNaturalSize] = useState(null);

    useEffect(() => {
        const el = imgWrapRef.current;
        if (!el) return;
        const ro = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry) return;
            const { width, height } = entry.contentRect;
            setContainerSize({ w: width, h: height });
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const handleImageLoad = useCallback((e) => {
        const img = e.currentTarget;
        if (img?.naturalWidth && img?.naturalHeight) {
            setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
        }
    }, []);

    const correctedHotspot = useMemo(() => {
        const { w: cw, h: ch } = containerSize;
        if (!naturalSize || !cw || !ch) return hotspot;

        const contentW = cw - IMAGE_PADDING_PX * 2;
        const contentH = ch - IMAGE_PADDING_PX * 2;
        if (contentW <= 0 || contentH <= 0) return hotspot;

        const imgRatio = naturalSize.w / naturalSize.h;
        const boxRatio = contentW / contentH;

        let renderW, renderH, offsetX, offsetY;
        if (imgRatio > boxRatio) {
            renderW = contentW;
            renderH = contentW / imgRatio;
            offsetX = IMAGE_PADDING_PX;
            offsetY = IMAGE_PADDING_PX + (contentH - renderH) / 2;
        } else {
            renderH = contentH;
            renderW = contentH * imgRatio;
            offsetY = IMAGE_PADDING_PX;
            offsetX = IMAGE_PADDING_PX + (contentW - renderW) / 2;
        }

        const pxX = offsetX + (hotspot.x / 100) * renderW;
        const pxY = offsetY + (hotspot.y / 100) * renderH;

        return {
            x: (pxX / cw) * 100,
            y: (pxY / ch) * 100,
        };
    }, [naturalSize, containerSize, hotspot.x, hotspot.y]);

    useEffect(() => {
        setOpenFaq(0);
        setSubmitted(false);
    }, [treatmentId]);

    const pathD = useMemo(() => {
        const midX = (correctedHotspot.x + anchor.x) / 2;
        const midY = Math.min(correctedHotspot.y, anchor.y) - 5;
        return `M ${correctedHotspot.x} ${correctedHotspot.y} Q ${midX} ${midY} ${anchor.x} ${anchor.y}`;
    }, [correctedHotspot.x, correctedHotspot.y]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    phone: form.phone,
                    treatment: form.treatment,
                    message: form.message || "No message provided",
                },
                EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to submit inquiry. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const EyeDiagramFrame = () => (
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-black/10 bg-neutral-50 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <span className="rounded-full bg-white px-3 py-0.5 text-[10px] font-semibold tracking-wide text-black/60 shadow-sm border border-black/5">
                    {VIEW_LABELS[view]}
                </span>
                <span className="text-[11px] font-semibold text-black/40 uppercase">Interactive Diagram</span>
            </div>

            <div ref={imgWrapRef} className="relative aspect-[4/3] w-full">
                <Image
                    key={EYE_VIEWS[view]}
                    src={EYE_VIEWS[view]}
                    alt={`${d.name} diagram`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 420px"
                    quality={90}
                    onLoad={handleImageLoad}
                    className="object-contain p-2"
                />

                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                >
                    <path
                        d={pathD}
                        fill="none"
                        stroke="rgba(0,0,0,0.3)"
                        strokeWidth="0.5"
                        strokeDasharray="1.5 1.5"
                    />
                </svg>

                <div
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${correctedHotspot.x}%`, top: `${correctedHotspot.y}%` }}
                >
                    <span className="absolute inline-flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-black/40" />
                    <span className="relative block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-black shadow" />
                </div>
            </div>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 shadow-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-black/40 mb-3">
                    Procedure At A Glance
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="border-b border-black/5 pb-2">
                        <span className="block text-black/50">Duration</span>
                        <span className="font-bold text-black">{d.detailsCard?.duration ?? "15-30 Mins"}</span>
                    </div>
                    <div className="border-b border-black/5 pb-2">
                        <span className="block text-black/50">Recovery</span>
                        <span className="font-bold text-black">{d.detailsCard?.recovery ?? "24-48 Hours"}</span>
                    </div>
                    <div className="border-b border-black/5 pb-2">
                        <span className="block text-black/50">Anesthesia</span>
                        <span className="font-bold text-black">{d.detailsCard?.anesthesia ?? "Topical Drops"}</span>
                    </div>
                    <div className="border-b border-black/5 pb-2">
                        <span className="block text-black/50">Success Rate</span>
                        <span className="font-bold text-black">{d.detailsCard?.successRate ?? "99%+"}</span>
                    </div>
                    <div className="col-span-2 pt-1">
                        <span className="block text-black/50">Care Type</span>
                        <span className="font-bold text-black">{d.detailsCard?.hospitalStay ?? "Outpatient (Same Day)"}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            key={treatmentId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black min-h-screen"
        >
            <Navbar />

            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-28 pb-16 lg:grid-cols-12 lg:gap-12 lg:px-10">
                <div className="flex flex-col justify-center lg:col-span-7">
                    <span className="mb-3 inline-block w-fit rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-xs font-semibold tracking-wider text-black/70 uppercase">
                        {d.category ?? "Eye Condition"}
                    </span>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                        {d.name}
                    </h1>
                    {d.tagline && (
                        <p className="mt-3 text-lg font-medium text-black/70">{d.tagline}</p>
                    )}

                    <div className="mt-6 block lg:hidden">
                        <EyeDiagramFrame />
                    </div>

                    {d.treatment && (
                        <div className="mt-6 space-y-4 border-t border-black/10 pt-6">
                            {d.treatment.heading && (
                                <h2 className="text-xl font-bold text-black">{d.treatment.heading}</h2>
                            )}
                            {(d.treatment.paragraphs ?? []).map((p, i) => (
                                <p key={i} className="leading-relaxed text-black/70 text-sm sm:text-base">
                                    {p}
                                </p>
                            ))}
                        </div>
                    )}

                    <div className="mt-8 flex items-center gap-4">
                        <a
                            href="#book-consultation"
                            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-black/80 shadow-md"
                        >
                            Book Consultation
                        </a>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center lg:col-span-5">
                    <EyeDiagramFrame />
                </div>
            </section>

            {Array.isArray(d.technologies) && d.technologies.length > 0 && (
                <section className="bg-black py-20 text-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/10 pb-8 mb-10">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                                    Technology & Equipment
                                </span>
                                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                    Advanced Surgical Suite
                                </h2>
                                <p className="mt-2 max-w-xl text-sm text-white/60">
                                    Precision equipment chosen explicitly for safety and optical outcomes.
                                </p>
                            </div>

                            <div className="relative h-10 w-40 shrink-0">
                                <Image
                                    src="/images/logo/eyevora2.png"
                                    alt="Eyevora Logo"
                                    fill
                                    sizes="160px"
                                    className="object-contain object-left md:object-right"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {d.technologies.map((tech, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                                >
                                    <h3 className="text-base font-semibold">{tech.name}</h3>
                                    <p className="mt-3 text-xs leading-relaxed text-white/60">
                                        {tech.description}
                                    </p>
                                    {Array.isArray(tech.tags) && tech.tags.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {tech.tags.map((tag, j) => (
                                                <span
                                                    key={j}
                                                    className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] text-white/80"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="border-t border-black/10 bg-neutral-900 py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-7">
                            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                                Step-by-Step Overview
                            </span>
                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                Surgical Procedure Steps
                            </h2>
                            <p className="mt-3 text-sm text-white/60">
                                Detailed breakdown of how the treatment is carried out step by step.
                            </p>

                            <div className="mt-8 space-y-4">
                                {(d.procedureSteps ?? []).map((step, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                                    >
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                                            <p className="mt-1 text-xs leading-relaxed text-white/70">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center lg:col-span-5">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                                <Image
                                    src="/images/photos/doctor.webp"
                                    alt="Lead Ophthalmic Specialist"
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 500px"
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur">
                                        Chief Ophthalmic Surgeon
                                    </span>
                                    <h3 className="mt-2 text-xl font-bold text-white">Expert Surgical Care</h3>
                                    <p className="mt-1 text-xs text-white/70">
                                        Board-certified ophthalmologists guiding your vision restoration journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="book-consultation"
                className="bg-neutral-950 py-20 text-white border-t border-white/10"
            >
                <div className="mx-auto max-w-6xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-2 shadow-inner">
                                    <Image
                                        src={EYE_VIEWS[view]}
                                        alt={`${d.name} mini icon`}
                                        fill
                                        sizes="64px"
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                        Selected Care Path
                                    </span>
                                    <h3 className="text-lg font-bold text-white">{d.name}</h3>
                                </div>
                            </div>

                            <p className="mt-6 text-xs leading-relaxed text-white/60">
                                Reach out to book a personal consultation with our clinical specialists.
                                We offer pre-surgical mapping, evaluations, and personalized treatment options.
                            </p>

                            {d.machineHighlight && (
                                <div className="mt-6 rounded-xl bg-white/5 p-4 border border-white/10">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                                        {d.machineHighlight.title ?? "Technology Highlight"}
                                    </p>
                                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                                        <RichText text={d.machineHighlight.description ?? ""} />
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-xl lg:col-span-7">
                            <h3 className="text-xl font-bold">Book Your Appointment</h3>
                            <p className="mt-1 text-xs text-white/60">
                                Submit your details below to schedule your visit.
                            </p>

                            {submitted ? (
                                <div className="mt-6 rounded-xl border border-white/10 bg-white/10 p-4 text-center">
                                    <p className="text-sm font-semibold">Request Received!</p>
                                    <p className="mt-1 text-xs text-white/70">
                                        Our care team will reach out to confirm your slot.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-white/50"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="(555) 000-0000"
                                                className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-white/50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                            Condition / Treatment *
                                        </label>
                                        <select
                                            name="treatment"
                                            required
                                            value={form.treatment}
                                            onChange={handleChange}
                                            className="mt-1 w-full rounded-lg border border-white/15 bg-neutral-900 px-3 py-2 text-xs text-white outline-none focus:border-white/50"
                                        >
                                            <option value="" disabled>Select a Condition / Treatment...</option>
                                            {Object.values(diseaseData).map((item) => (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                            Message / Notes
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={2}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Mention symptoms or preferred date..."
                                            className="mt-1 w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-white/50"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full rounded-lg bg-white py-2.5 text-xs font-bold text-black transition hover:bg-neutral-200 disabled:opacity-50"
                                    >
                                        {loading ? "Sending..." : "Confirm Consultation Request"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {Array.isArray(d.faqs) && d.faqs.length > 0 && (
                <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-black/50">
                        Frequently Asked Questions
                    </span>
                    <h2 className="mt-2 text-3xl font-bold">
                        Questions About {d.name}
                    </h2>

                    <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
                        {d.faqs.slice(0, 5).map((faq, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i}>
                                    <button
                                        onClick={() => setOpenFaq(open ? -1 : i)}
                                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                                    >
                                        <span className="text-sm font-semibold sm:text-base">{faq.question}</span>
                                        <span className="shrink-0 text-lg font-bold text-black/40">
                                            {open ? "−" : "+"}
                                        </span>
                                    </button>
                                    {open && (
                                        <p className="pb-4 text-xs leading-relaxed text-black/70 sm:text-sm">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </motion.div>
    );
}