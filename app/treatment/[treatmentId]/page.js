"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import { diseaseData } from "@/data/diseaseContent";
import Footer from "@/components/Footer";

const EMAILJS_SERVICE_ID = "service_nx91wke";
const EMAILJS_TEMPLATE_ID = "template_loos9xj";
const EMAILJS_PUBLIC_KEY = "k3ORwrN11DA_MndsG";

const COUNTRY_CODES = [
    { code: "+1", label: "🇺🇸 +1 (US)", maxLength: 10 },
    { code: "+1", label: "🇨🇦 +1 (CA)", maxLength: 10 },
    { code: "+7", label: "🇷🇺 +7 (RU)", maxLength: 10 },
    { code: "+20", label: "🇪🇬 +20 (EG)", maxLength: 10 },
    { code: "+27", label: "🇿🇦 +27 (ZA)", maxLength: 9 },
    { code: "+30", label: "🇬🇷 +30 (GR)", maxLength: 10 },
    { code: "+31", label: "🇳🇱 +31 (NL)", maxLength: 9 },
    { code: "+32", label: "🇧🇪 +32 (BE)", maxLength: 9 },
    { code: "+33", label: "🇫🇷 +33 (FR)", maxLength: 9 },
    { code: "+34", label: "🇪🇸 +34 (ES)", maxLength: 9 },
    { code: "+36", label: "🇭🇺 +36 (HU)", maxLength: 9 },
    { code: "+39", label: "🇮🇹 +39 (IT)", maxLength: 10 },
    { code: "+40", label: "🇷🇴 +40 (RO)", maxLength: 9 },
    { code: "+41", label: "🇨🇭 +41 (CH)", maxLength: 9 },
    { code: "+43", label: "🇦🇹 +43 (AT)", maxLength: 10 },
    { code: "+44", label: "🇬🇧 +44 (UK)", maxLength: 10 },
    { code: "+45", label: "🇩🇰 +45 (DK)", maxLength: 8 },
    { code: "+46", label: "🇸🇪 +46 (SE)", maxLength: 9 },
    { code: "+47", label: "🇳🇴 +47 (NO)", maxLength: 8 },
    { code: "+48", label: "🇵🇱 +48 (PL)", maxLength: 9 },
    { code: "+49", label: "🇩🇪 +49 (DE)", maxLength: 11 },
    { code: "+51", label: "🇵🇪 +51 (PE)", maxLength: 9 },
    { code: "+52", label: "🇲🇽 +52 (MX)", maxLength: 10 },
    { code: "+53", label: "🇨🇺 +53 (CU)", maxLength: 8 },
    { code: "+54", label: "🇦🇷 +54 (AR)", maxLength: 10 },
    { code: "+55", label: "🇧🇷 +55 (BR)", maxLength: 11 },
    { code: "+56", label: "🇨🇱 +56 (CL)", maxLength: 9 },
    { code: "+57", label: "🇨🇴 +57 (CO)", maxLength: 10 },
    { code: "+58", label: "🇻🇪 +58 (VE)", maxLength: 10 },
    { code: "+60", label: "🇲🇾 +60 (MY)", maxLength: 9 },
    { code: "+61", label: "🇦🇺 +61 (AU)", maxLength: 9 },
    { code: "+62", label: "🇮🇩 +62 (ID)", maxLength: 12 },
    { code: "+63", label: "🇵🇭 +63 (PH)", maxLength: 10 },
    { code: "+64", label: "🇳🇿 +64 (NZ)", maxLength: 10 },
    { code: "+65", label: "🇸🇬 +65 (SG)", maxLength: 8 },
    { code: "+66", label: "🇹🇭 +66 (TH)", maxLength: 9 },
    { code: "+81", label: "🇯🇵 +81 (JP)", maxLength: 10 },
    { code: "+82", label: "🇰🇷 +82 (KR)", maxLength: 10 },
    { code: "+84", label: "🇻🇳 +84 (VN)", maxLength: 10 },
    { code: "+86", label: "🇨🇳 +86 (CN)", maxLength: 11 },
    { code: "+90", label: "🇹🇷 +90 (TR)", maxLength: 10 },
    { code: "+91", label: "🇮🇳 +91 (IN)", maxLength: 10 },
    { code: "+92", label: "🇵🇰 +92 (PK)", maxLength: 10 },
    { code: "+93", label: "🇦🇫 +93 (AF)", maxLength: 9 },
    { code: "+94", label: "🇱🇰 +94 (LK)", maxLength: 9 },
    { code: "+95", label: "🇲🇲 +95 (MM)", maxLength: 10 },
    { code: "+98", label: "🇮🇷 +98 (IR)", maxLength: 10 },

    { code: "+211", label: "🇸🇸 +211 (SS)", maxLength: 9 },
    { code: "+212", label: "🇲🇦 +212 (MA)", maxLength: 9 },
    { code: "+213", label: "🇩🇿 +213 (DZ)", maxLength: 9 },
    { code: "+216", label: "🇹🇳 +216 (TN)", maxLength: 8 },
    { code: "+218", label: "🇱🇾 +218 (LY)", maxLength: 9 },
    { code: "+220", label: "🇬🇲 +220 (GM)", maxLength: 7 },
    { code: "+221", label: "🇸🇳 +221 (SN)", maxLength: 9 },
    { code: "+222", label: "🇲🇷 +222 (MR)", maxLength: 8 },
    { code: "+223", label: "🇲🇱 +223 (ML)", maxLength: 8 },
    { code: "+224", label: "🇬🇳 +224 (GN)", maxLength: 9 },
    { code: "+225", label: "🇨🇮 +225 (CI)", maxLength: 10 },
    { code: "+226", label: "🇧🇫 +226 (BF)", maxLength: 8 },
    { code: "+227", label: "🇳🇪 +227 (NE)", maxLength: 8 },
    { code: "+228", label: "🇹🇬 +228 (TG)", maxLength: 8 },
    { code: "+229", label: "🇧🇯 +229 (BJ)", maxLength: 8 },
    { code: "+230", label: "🇲🇺 +230 (MU)", maxLength: 8 },
    { code: "+231", label: "🇱🇷 +231 (LR)", maxLength: 7 },
    { code: "+232", label: "🇸🇱 +232 (SL)", maxLength: 8 },
    { code: "+233", label: "🇬🇭 +233 (GH)", maxLength: 9 },
    { code: "+234", label: "🇳🇬 +234 (NG)", maxLength: 10 },
    { code: "+235", label: "🇹🇩 +235 (TD)", maxLength: 8 },
    { code: "+236", label: "🇨🇫 +236 (CF)", maxLength: 8 },
    { code: "+237", label: "🇨🇲 +237 (CM)", maxLength: 9 },
    { code: "+238", label: "🇨🇻 +238 (CV)", maxLength: 7 },
    { code: "+239", label: "🇸🇹 +239 (ST)", maxLength: 7 },
    { code: "+240", label: "🇬🇶 +240 (GQ)", maxLength: 9 },
    { code: "+241", label: "🇬🇦 +241 (GA)", maxLength: 8 },
    { code: "+242", label: "🇨🇬 +242 (CG)", maxLength: 9 },
    { code: "+243", label: "🇨🇩 +243 (CD)", maxLength: 9 },
    { code: "+244", label: "🇦🇴 +244 (AO)", maxLength: 9 },
    { code: "+245", label: "🇬🇼 +245 (GW)", maxLength: 7 },
    { code: "+246", label: "🇮🇴 +246 (IO)", maxLength: 7 },
    { code: "+248", label: "🇸🇨 +248 (SC)", maxLength: 7 },
    { code: "+249", label: "🇸🇩 +249 (SD)", maxLength: 9 },
    { code: "+250", label: "🇷🇼 +250 (RW)", maxLength: 9 },
    { code: "+251", label: "🇪🇹 +251 (ET)", maxLength: 9 },
    { code: "+252", label: "🇸🇴 +252 (SO)", maxLength: 8 },
    { code: "+253", label: "🇩🇯 +253 (DJ)", maxLength: 8 },
    { code: "+254", label: "🇰🇪 +254 (KE)", maxLength: 9 },
    { code: "+255", label: "🇹🇿 +255 (TZ)", maxLength: 9 },
    { code: "+256", label: "🇺🇬 +256 (UG)", maxLength: 9 },
    { code: "+257", label: "🇧🇮 +257 (BI)", maxLength: 8 },
    { code: "+258", label: "🇲🇿 +258 (MZ)", maxLength: 9 },
    { code: "+260", label: "🇿🇲 +260 (ZM)", maxLength: 9 },
    { code: "+261", label: "🇲🇬 +261 (MG)", maxLength: 9 },
    { code: "+262", label: "🇷🇪 +262 (RE)", maxLength: 9 },
    { code: "+263", label: "🇿🇼 +263 (ZW)", maxLength: 9 },
    { code: "+264", label: "🇳🇦 +264 (NA)", maxLength: 9 },
    { code: "+265", label: "🇲🇼 +265 (MW)", maxLength: 9 },
    { code: "+266", label: "🇱🇸 +266 (LS)", maxLength: 8 },
    { code: "+267", label: "🇧🇼 +267 (BW)", maxLength: 8 },
    { code: "+268", label: "🇸🇿 +268 (SZ)", maxLength: 8 },
    { code: "+269", label: "🇰🇲 +269 (KM)", maxLength: 7 },

    { code: "+290", label: "🇸🇭 +290 (SH)", maxLength: 5 },
    { code: "+291", label: "🇪🇷 +291 (ER)", maxLength: 7 },
    { code: "+297", label: "🇦🇼 +297 (AW)", maxLength: 7 },
    { code: "+298", label: "🇫🇴 +298 (FO)", maxLength: 6 },
    { code: "+299", label: "🇬🇱 +299 (GL)", maxLength: 6 },

    { code: "+350", label: "🇬🇮 +350 (GI)", maxLength: 8 },
    { code: "+351", label: "🇵🇹 +351 (PT)", maxLength: 9 },
    { code: "+352", label: "🇱🇺 +352 (LU)", maxLength: 9 },
    { code: "+353", label: "🇮🇪 +353 (IE)", maxLength: 9 },
    { code: "+354", label: "🇮🇸 +354 (IS)", maxLength: 7 },
    { code: "+355", label: "🇦🇱 +355 (AL)", maxLength: 9 },
    { code: "+356", label: "🇲🇹 +356 (MT)", maxLength: 8 },
    { code: "+357", label: "🇨🇾 +357 (CY)", maxLength: 8 },
    { code: "+358", label: "🇫🇮 +358 (FI)", maxLength: 10 },
    { code: "+359", label: "🇧🇬 +359 (BG)", maxLength: 9 },
    { code: "+370", label: "🇱🇹 +370 (LT)", maxLength: 8 },
    { code: "+371", label: "🇱🇻 +371 (LV)", maxLength: 8 },
    { code: "+372", label: "🇪🇪 +372 (EE)", maxLength: 8 },
    { code: "+373", label: "🇲🇩 +373 (MD)", maxLength: 8 },
    { code: "+374", label: "🇦🇲 +374 (AM)", maxLength: 8 },
    { code: "+375", label: "🇧🇾 +375 (BY)", maxLength: 9 },
    { code: "+376", label: "🇦🇩 +376 (AD)", maxLength: 6 },
    { code: "+377", label: "🇲🇨 +377 (MC)", maxLength: 8 },
    { code: "+378", label: "🇸🇲 +378 (SM)", maxLength: 10 },
    { code: "+380", label: "🇺🇦 +380 (UA)", maxLength: 9 },
    { code: "+381", label: "🇷🇸 +381 (RS)", maxLength: 9 },
    { code: "+382", label: "🇲🇪 +382 (ME)", maxLength: 8 },
    { code: "+383", label: "🇽🇰 +383 (XK)", maxLength: 8 },
    { code: "+385", label: "🇭🇷 +385 (HR)", maxLength: 9 },
    { code: "+386", label: "🇸🇮 +386 (SI)", maxLength: 8 },
    { code: "+387", label: "🇧🇦 +387 (BA)", maxLength: 8 },
    { code: "+389", label: "🇲🇰 +389 (MK)", maxLength: 8 },

    { code: "+960", label: "🇲🇻 +960 (MV)", maxLength: 7 },
    { code: "+961", label: "🇱🇧 +961 (LB)", maxLength: 8 },
    { code: "+962", label: "🇯🇴 +962 (JO)", maxLength: 9 },
    { code: "+963", label: "🇸🇾 +963 (SY)", maxLength: 9 },
    { code: "+964", label: "🇮🇶 +964 (IQ)", maxLength: 10 },
    { code: "+965", label: "🇰🇼 +965 (KW)", maxLength: 8 },
    { code: "+966", label: "🇸🇦 +966 (SA)", maxLength: 9 },
    { code: "+967", label: "🇾🇪 +967 (YE)", maxLength: 9 },
    { code: "+968", label: "🇴🇲 +968 (OM)", maxLength: 8 },
    { code: "+970", label: "🇵🇸 +970 (PS)", maxLength: 9 },
    { code: "+971", label: "🇦🇪 +971 (AE)", maxLength: 9 },
    { code: "+972", label: "🇮🇱 +972 (IL)", maxLength: 9 },
    { code: "+973", label: "🇧🇭 +973 (BH)", maxLength: 8 },
    { code: "+974", label: "🇶🇦 +974 (QA)", maxLength: 8 },
    { code: "+975", label: "🇧🇹 +975 (BT)", maxLength: 8 },
    { code: "+976", label: "🇲🇳 +976 (MN)", maxLength: 8 },
    { code: "+977", label: "🇳🇵 +977 (NP)", maxLength: 10 },
    { code: "+992", label: "🇹🇯 +992 (TJ)", maxLength: 9 },
    { code: "+993", label: "🇹🇲 +993 (TM)", maxLength: 8 },
    { code: "+994", label: "🇦🇿 +994 (AZ)", maxLength: 9 },
    { code: "+995", label: "🇬🇪 +995 (GE)", maxLength: 9 },
    { code: "+996", label: "🇰🇬 +996 (KG)", maxLength: 9 },
    { code: "+998", label: "🇺🇿 +998 (UZ)", maxLength: 9 },

    { code: "+1242", label: "🇧🇸 +1242 (BS)", maxLength: 7 },
    { code: "+1246", label: "🇧🇧 +1246 (BB)", maxLength: 7 },
    { code: "+1264", label: "🇦🇮 +1264 (AI)", maxLength: 7 },
    { code: "+1268", label: "🇦🇬 +1268 (AG)", maxLength: 7 },
    { code: "+1284", label: "🇻🇬 +1284 (VG)", maxLength: 7 },
    { code: "+1340", label: "🇻🇮 +1340 (VI)", maxLength: 7 },
    { code: "+1345", label: "🇰🇾 +1345 (KY)", maxLength: 7 },
    { code: "+1441", label: "🇧🇲 +1441 (BM)", maxLength: 7 },
    { code: "+1473", label: "🇬🇩 +1473 (GD)", maxLength: 7 },
    { code: "+1649", label: "🇹🇨 +1649 (TC)", maxLength: 7 },
    { code: "+1658", label: "🇺🇸 +1658 (US)", maxLength: 10 },
    { code: "+1670", label: "🇲🇵 +1670 (MP)", maxLength: 7 },
    { code: "+1671", label: "🇬🇺 +1671 (GU)", maxLength: 7 },
    { code: "+1684", label: "🇦🇸 +1684 (AS)", maxLength: 7 },
    { code: "+1721", label: "🇸🇽 +1721 (SX)", maxLength: 7 },
    { code: "+1758", label: "🇱🇨 +1758 (LC)", maxLength: 7 },
    { code: "+1767", label: "🇩🇲 +1767 (DM)", maxLength: 7 },
    { code: "+1784", label: "🇻🇨 +1784 (VC)", maxLength: 7 },
    { code: "+1787", label: "🇵🇷 +1787 (PR)", maxLength: 10 },
    { code: "+1809", label: "🇩🇴 +1809 (DO)", maxLength: 10 },
    { code: "+1868", label: "🇹🇹 +1868 (TT)", maxLength: 7 },
    { code: "+1869", label: "🇰🇳 +1869 (KN)", maxLength: 7 },
    { code: "+1876", label: "🇯🇲 +1876 (JM)", maxLength: 7 },

    { code: "+500", label: "🇫🇰 +500 (FK)", maxLength: 5 },
    { code: "+501", label: "🇧ℤ +501 (BZ)", maxLength: 7 },
    { code: "+502", label: "🇬🇹 +502 (GT)", maxLength: 8 },
    { code: "+503", label: "🇸🇻 +503 (SV)", maxLength: 8 },
    { code: "+504", label: "🇭🇳 +504 (HN)", maxLength: 8 },
    { code: "+505", label: "🇳🇮 +505 (NI)", maxLength: 8 },
    { code: "+506", label: "🇨🇷 +506 (CR)", maxLength: 8 },
    { code: "+507", label: "🇵🇦 +507 (PA)", maxLength: 8 },
    { code: "+508", label: "🇵🇲 +508 (PM)", maxLength: 6 },
    { code: "+509", label: "🇭🇹 +509 (HT)", maxLength: 8 },
    { code: "+590", label: "🇬🇵 +590 (GP)", maxLength: 9 },
    { code: "+591", label: "🇧🇴 +591 (BO)", maxLength: 8 },
    { code: "+592", label: "🇬🇾 +592 (GY)", maxLength: 7 },
    { code: "+593", label: "🇪🇨 +593 (EC)", maxLength: 9 },
    { code: "+594", label: "🇬🇫 +594 (GF)", maxLength: 9 },
    { code: "+595", label: "🇵🇾 +595 (PY)", maxLength: 9 },
    { code: "+596", label: "🇲🇶 +596 (MQ)", maxLength: 9 },
    { code: "+597", label: "🇸🇷 +597 (SR)", maxLength: 7 },
    { code: "+598", label: "🇺🇾 +598 (UY)", maxLength: 8 },
    { code: "+599", label: "🇨🇼 +599 (CW)", maxLength: 8 },

    { code: "+670", label: "🇹🇱 +670 (TL)", maxLength: 8 },
    { code: "+672", label: "🇦🇶 +672 (AQ)", maxLength: 9 },
    { code: "+673", label: "🇧🇳 +673 (BN)", maxLength: 7 },
    { code: "+674", label: "🇳🇷 +674 (NR)", maxLength: 7 },
    { code: "+675", label: "🇵🇬 +675 (PG)", maxLength: 8 },
    { code: "+676", label: "🇹🇴 +676 (TO)", maxLength: 7 },
    { code: "+677", label: "🇸🇧 +677 (SB)", maxLength: 7 },
    { code: "+678", label: "🇻🇺 +678 (VU)", maxLength: 7 },
    { code: "+679", label: "🇫🇯 +679 (FJ)", maxLength: 7 },
    { code: "+680", label: "🇵🇼 +680 (PW)", maxLength: 7 },
    { code: "+681", label: "🇼🇫 +681 (WF)", maxLength: 6 },
    { code: "+682", label: "🇨🇰 +682 (CK)", maxLength: 5 },
    { code: "+683", label: "🇳🇺 +683 (NU)", maxLength: 4 },
    { code: "+685", label: "🇼🇸 +685 (WS)", maxLength: 7 },
    { code: "+686", label: "🇰🇮 +686 (KI)", maxLength: 8 },
    { code: "+687", label: "🇳🇨 +687 (NC)", maxLength: 6 },
    { code: "+688", label: "🇹🇻 +688 (TV)", maxLength: 6 },
    { code: "+689", label: "🇵🇫 +689 (PF)", maxLength: 8 },
    { code: "+690", label: "🇹🇰 +690 (TK)", maxLength: 4 },
    { code: "+691", label: "🇫🇲 +691 (FM)", maxLength: 7 },
    { code: "+692", label: "🇲🇭 +692 (MH)", maxLength: 7 },

    { code: "+850", label: "🇰🇵 +850 (KP)", maxLength: 10 },
    { code: "+852", label: "🇭🇰 +852 (HK)", maxLength: 8 },
    { code: "+853", label: "🇲🇴 +853 (MO)", maxLength: 8 },
    { code: "+855", label: "🇰🇭 +855 (KH)", maxLength: 9 },
    { code: "+856", label: "🇱🇦 +856 (LA)", maxLength: 10 },
    { code: "+880", label: "🇧🇩 +880 (BD)", maxLength: 10 },
    { code: "+886", label: "🇹🇼 +886 (TW)", maxLength: 9 },
];

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
    const [countryCode, setCountryCode] = useState("+91");
    const [form, setForm] = useState({ name: "", phone: "", treatment: d?.name || "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const selectedCountry = useMemo(() => {
        return COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];
    }, [countryCode]);

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
        if (name === "phone") {
            const digitsOnly = value.replace(/\D/g, "").slice(0, selectedCountry.maxLength);
            setForm((f) => ({ ...f, phone: digitsOnly }));
        } else {
            setForm((f) => ({ ...f, [name]: value }));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const fullPhoneNumber = `${countryCode} ${form.phone}`;

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    phone: fullPhoneNumber,
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
                                            <div className="mt-1 flex rounded-lg border border-white/15 bg-white/5 overflow-hidden focus-within:border-white/50">
                                                <select
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    className="bg-neutral-900 text-white text-xs px-2 py-2 border-r border-white/15 outline-none"
                                                >
                                                    {COUNTRY_CODES.map((item) => (
                                                        <option key={item.label} value={item.code}>
                                                            {item.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    maxLength={selectedCountry.maxLength}
                                                    placeholder={`${selectedCountry.maxLength} digits`}
                                                    className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-white/30 outline-none"
                                                />
                                            </div>
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
            <Footer />
        </motion.div>
    );
}