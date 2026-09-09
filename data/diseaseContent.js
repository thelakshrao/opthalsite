/**
 * data/diseaseContent.js
 * ------------------------------------------------------------------------
 * Expanded Comprehensive Dataset for Ophthalmic Conditions & Procedures.
 * Serving as the single source of truth for dynamic disease routes.
 * ------------------------------------------------------------------------
 */

export const diseaseData = {
    // ===========================================================================
    // FRONT VIEW CONDITIONS
    // ===========================================================================

    "conjunctivitis": {
        id: "conjunctivitis",
        name: "Conjunctivitis (Pink Eye)",
        category: "Anterior Segment / Cornea & External Disease",
        view: "front",
        tagline: "Rapid-acting targeted relief for acute inflammatory and infectious conjunctival disorders.",
        hotspot: { x: 72, y: 48 },
        zoomInset: {
            structure: "Conjunctiva & Scleral Surface",
            procedure: "Dilated superficial vascular network targeting via anti-pathogenic micro-drops and epithelial irrigation."
        },
        detailsCard: {
            duration: "10-15 Mins",
            recovery: "24-48 Hours",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "99.4%",
            hospitalStay: "Outpatient Clinic Visit"
        },
        treatment: {
            heading: "Comprehensive Diagnosis & Micro-Targeted Conjunctival Care",
            paragraphs: [
                "Conjunctivitis, commonly known as pink eye, involves acute or chronic inflammation of the transparent conjunctival membrane covering the sclera. Our clinic employs molecular diagnostic swabbing alongside high-magnification slit-lamp biomicroscopy to differentiate between adenoviral, bacterial, fungal, and allergic hyper-responsiveness.",
                "By precise identification of the underlying causative pathogen, we eliminate unnecessary broad-spectrum antibiotic usage, prescribing targeted anti-inflammatory regimens, mast-cell stabilizers, or specific antiviral formulations. This ensures rapid symptomatic relief within 24 to 48 hours while protecting the underlying corneal epithelium from secondary keratitis."
            ]
        },
        procedureSteps: [
            {
                title: "Biomicroscopic Anterior Evaluation",
                description: "High-magnification slit-lamp exam with cobalt blue and yellow barrier filters to assess follicular or papillary conjunctival responses."
            },
            {
                title: "Rapid Molecular Swab Profiling",
                description: "Collection of tear film and palpebral conjunctival exudate for real-time PCR profiling to identify viral or bacterial nucleic acids."
            },
            {
                title: "Epithelial Debridement & Washout",
                description: "Therapeutic ocular surface irrigation using sterile balanced salt solution (BSS) to flush out hyper-inflammatory cytokines and debris."
            },
            {
                title: "Targeted Pharmacotherapy Application",
                description: "Instillation of targeted broad-spectrum or customized anti-pathogenic formulations based on rapid diagnostic feedback."
            },
            {
                title: "Corneal Stain & Barrier Check",
                description: "Fluorescein dye clearance testing to confirm full integrity of the central corneal epithelium and rule out infiltrates."
            },
            {
                title: "Post-Treatment Barrier Protection",
                description: "Application of protective gel shield or temporary cold compression protocols to instantly reduce periorbital edema and vascular engorgement."
            }
        ],
        technologies: [
            {
                name: "Slit-Lamp Biomicroscopy",
                type: "Diagnostic Imaging",
                isLatestTech: true,
                duration: "10-15 Minutes",
                safetyProfile: "Non-invasive & 100% Safe",
                description: "High-magnification binocular optical system with variable slit apertures, enabling sub-millimeter visualization of palpebral and bulbar conjunctiva.",
                tags: ["Diagnostic", "Anterior Segment", "FDA Approved"]
            },
            {
                name: "PCR Conjunctival Swab Testing",
                type: "Pathogen Profiling",
                isLatestTech: true,
                duration: "Same-Day Results",
                safetyProfile: "Painless Swab",
                description: "Rapid molecular diagnostic platform designed to detect Adenovirus, Herpes Simplex, Chlamydia, and bacterial species at low copy numbers.",
                tags: ["Molecular Diagnostics", "Precision Medicine"]
            },
            {
                name: "InflammaDry Matrix Metalloproteinase-9 Detector",
                type: "Point-of-Care Immunoassay",
                isLatestTech: true,
                duration: "10 Minutes",
                safetyProfile: "Painless Test",
                description: "In-office immunoassay measuring elevated levels of MMP-9, a key inflammatory marker in tear fluid, guiding anti-inflammatory steroid selection.",
                tags: ["Immunoassay", "Point-of-Care"]
            }
        ],
        machineHighlight: {
            title: "EQUIPMENT WE USE FOR DIAGNOSIS & FLUIDICS",
            description: "Diagnostic profiling utilizes the **Haag-Streit BQ 900 Slit Lamp** equipped with **IM 900 digital imaging module** for high-resolution anterior photo-documentation."
        },
        quickFacts: [
            { label: "Symptom Onset", value: "Rapid reduction in discharge within 24 hours of targeted drops." },
            { label: "Transmission Rate", value: "Drastically reduced after 24-48 hours of starting correct treatment." }
        ],
        faqs: [
            {
                question: "Is conjunctivitis contagious?",
                answer: "Viral and bacterial conjunctivitis are highly contagious. Prompt diagnosis and prescribed targeted eye drops drastically lower transmission risk within 24 to 48 hours."
            },
            {
                question: "How long does recovery take?",
                answer: "With appropriate targeted medication, symptoms typically resolve completely within 3 to 7 days depending on whether the origin is allergic, bacterial, or viral."
            },
            {
                question: "Can I wear contact lenses during treatment?",
                answer: "No. Contact lens wear must be discontinued until the infection or inflammation has fully cleared and your ophthalmologist evaluates your corneal surface."
            },
            {
                question: "What is the difference between viral and bacterial pink eye?",
                answer: "Viral pink eye typically produces watery discharge and is often associated with cold symptoms, whereas bacterial pink eye produces thick yellow-green discharge and lid crusting."
            },
            {
                question: "When can I safely return to school or work?",
                answer: "You can usually return 24 hours after beginning appropriate antibiotic treatment or when watery tearing and red discharge have significantly diminished."
            }
        ]
    },

    "dry-eye-syndrome": {
        id: "dry-eye-syndrome",
        name: "Dry Eye Syndrome & MGD",
        category: "Cornea & Ocular Surface Therapeutics",
        view: "front",
        tagline: "Thermal pulsation and light-based therapy restoring natural tear film stability.",
        hotspot: { x: 50, y: 52 },
        zoomInset: {
            structure: "Meibomian Glands & Tear Film",
            procedure: "Liquefaction and expression of stagnant meibomian gland lipids alongside intense pulsed light micro-vascular coagulation."
        },
        detailsCard: {
            duration: "15-20 Mins",
            recovery: "Immediate",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "97.8%",
            hospitalStay: "Outpatient Procedure"
        },
        treatment: {
            heading: "Advanced Thermal Pulsation & Light-Based Dry Eye Rehabilitation",
            paragraphs: [
                "Evaporative Dry Eye disease is primarily driven by Meibomian Gland Dysfunction (MGD), where the lipid-producing glands along the eyelid margins become clogged with inspissated secretions. This leads to premature tear breakup, rapid ocular surface drying, chronic friction, and recurrent micro-corneal epithelial erosions.",
                "Our clinical suite employs vector thermal pulsation (LipiFlow) alongside polychromatic Intense Pulsed Light (IPL) to target the root mechanisms of dry eye. By heating the inner eyelid tissue while applying peristaltic pressure, we clear obstructed glands and seal abnormal telangiectatic blood vessels that leak inflammatory cytokines."
            ]
        },
        procedureSteps: [
            {
                title: "Non-Invasive Interferometric LipiView Mapping",
                description: "Digital measurement of tear film lipid layer thickness and partial blink rate analysis."
            },
            {
                title: "Meibography Structural Assessment",
                description: "Infrared imaging of upper and lower eyelids to evaluate meibomian gland architecture and atrophy."
            },
            {
                title: "Topical Anesthetic Instillation",
                description: "Application of gentle proparacaine drops to ensure absolute comfort throughout the thermal thermal session."
            },
            {
                title: "Vector Thermal Pulsation (LipiFlow)",
                description: "Placement of single-use sterile activators over the cornea to deliver 42.5°C direct heat and gentle pressure patterns to internal glands."
            },
            {
                title: "OptiLight IPL Phototherapy Application",
                description: "Delivering targeted light energy pulses along the inferior periorbital zone to diminish micro-vascular inflammation."
            },
            {
                title: "Therapeutic Gland Expression & Barrier Shielding",
                description: "Manual clearing of melted lipid matrix followed by protective preservative-free lubricant drop placement."
            }
        ],
        technologies: [
            {
                name: "LipiFlow Thermal Pulsation System",
                type: "MGD Treatment",
                isLatestTech: true,
                duration: "12 Minutes",
                safetyProfile: "FDA Approved, No Downtime",
                description: "Applies controlled inner-eyelid thermal energy paired with simultaneous peristaltic motion to clear hardened glandular oils.",
                tags: ["Thermal Pulsation", "FDA Approved", "In-Office"]
            },
            {
                name: "OptiLight Intense Pulsed Light (IPL)",
                type: "Inflammation Reduction",
                isLatestTech: true,
                duration: "15 Minutes",
                safetyProfile: "Non-Invasive",
                description: "Uses spectral light bands to reduce inflammatory telangiectasias, destroy Demodex mites, and improve tear film stability.",
                tags: ["Phototherapy", "Anti-Inflammatory"]
            },
            {
                name: "TearLab Osmolarity System",
                type: "Diagnostic Measurement",
                isLatestTech: true,
                duration: "2 Minutes",
                safetyProfile: "Non-Invasive",
                description: "Quantitative measurement of tear film osmolarity from a nanoliter tear sample, providing an objective biomarker for treatment efficacy.",
                tags: ["Diagnostics", "Osmolarity"]
            }
        ],
        machineHighlight: {
            title: "EQUIPMENT WE USE FOR TREATMENT",
            description: "Treatments are administered using the **Johnson & Johnson LipiFlow Activator System** integrated with the **Lumenis OptiLight IPL platform**."
        },
        quickFacts: [
            { label: "Lipid Restoration", value: "Lipid layer thickness increases by up to 2-3x post-procedure." },
            { label: "Sustained Relief", value: "Clinical benefits persist for 12 to 24 months with basic hygiene maintenance." }
        ],
        faqs: [
            {
                question: "Is dry eye therapy permanent?",
                answer: "Treatments like LipiFlow and IPL provide long-lasting relief for 12 to 24 months. Periodic maintenance sessions combined with routine lid hygiene ensure ongoing stability."
            },
            {
                question: "What are common symptoms of dry eye?",
                answer: "Grittiness, burning, foreign body sensation, intermittent blurred vision, and paradoxically watery eyes caused by reflex lacrimation are hallmark symptoms."
            },
            {
                question: "Does the LipiFlow procedure hurt?",
                answer: "No. Numbing drops prevent discomfort. Most patients describe feeling a soothing, warm sensation and gentle pressure around the eyelids."
            },
            {
                question: "How soon after IPL and LipiFlow will I notice results?",
                answer: "While many notice immediate smoothing of tear film comfort, maximum glandular production and symptom relief occur 2 to 4 weeks post-treatment."
            },
            {
                question: "Are punctal plugs necessary for dry eye?",
                answer: "Punctal plugs are reserved for aqueous-deficient dry eye cases after inflammatory meibomian gland dysfunction has been addressed."
            }
        ]
    },

    "stye-chalazion": {
        id: "stye-chalazion",
        name: "Stye & Chalazion",
        category: "Oculoplastics & Eyelid Disorders",
        view: "front",
        tagline: "Scarless internal incision and curettage or targeted anti-inflammatory injections.",
        hotspot: { x: 48, y: 22 },
        zoomInset: {
            structure: "Encapsulated Meibomian Gland",
            procedure: "Trans-conjunctival micro-incision and complete curettage of granulomatous lipogranuloma."
        },
        detailsCard: {
            duration: "15-20 Mins",
            recovery: "24-48 Hours",
            anesthesia: "Subcutaneous Local Block",
            successRate: "98.9%",
            hospitalStay: "Outpatient Minor OT"
        },
        treatment: {
            heading: "Precision Scarless Eyelid Granuloma Excision",
            paragraphs: [
                "A chalazion forms when an obstructed meibomian oil gland ruptures into the surrounding tarsal plate, sparking a chronic lipogranulomatous inflammatory reaction. Unlike acute bacterial styes (hordeolums), chronic chalazia become encapsulated nodules that do not respond to conservative warm compression.",
                "When medical management fails, our oculoplastic surgeons perform microscopic trans-conjunctival incision and curettage. By operating entirely from the internal surface of the inverted eyelid, we eliminate the risk of external cutaneous scarring while cleanly resecting the fibrous wall to prevent recurrence."
            ]
        },
        procedureSteps: [
            {
                title: "Palpebral Micro-Localization",
                description: "Slit-lamp examination to evaluate the precise deep tarsal boundaries of the encapsulated nodule."
            },
            {
                title: "Subcutaneous Local Anesthesia",
                description: "Targeted infiltration of lidocaine with epinephrine to achieve instant anesthesia and absolute hemostasis."
            },
            {
                title: "Tarsal Eversion & Clamping",
                description: "Application of a specialized chalazion clamp to evert the lid and protect the global eyeball structure."
            },
            {
                title: "Trans-Conjunctival Micro-Incision",
                description: "Creating a vertical incision on the inner eyelid lining parallel to the normal course of meibomian glands."
            },
            {
                title: "Complete Granuloma Curettage",
                description: "Evacuation of inflammatory contents using precision micro-curettes and complete fibrous capsule breakdown."
            },
            {
                title: "Antibiotic Ointment & Compression Patching",
                description: "Instillation of broad-spectrum antibiotic ointment and temporary compression dressing placement for 2 to 4 hours."
            }
        ],
        technologies: [
            {
                name: "Micro-Curettage Technique",
                type: "Surgical Removal",
                isLatestTech: false,
                duration: "15 Minutes",
                safetyProfile: "High Safety, Local Anesthesia",
                description: "Surgical excision performed through the conjunctival aspect of the eyelid, preventing external facial skin scars.",
                tags: ["Scarless", "Minor Surgery", "Internal Incision"]
            },
            {
                name: "Intralesional Triamcinolone Acetonide Injection",
                type: "Non-Surgical Alternative",
                isLatestTech: false,
                duration: "5 Minutes",
                safetyProfile: "Minimal Downtime",
                description: "Direct micro-injection of a long-acting steroid into the center of the nodule to induce rapid anti-inflammatory resolution.",
                tags: ["Injection", "In-Office", "Non-Surgical"]
            },
            {
                name: "High-Frequency Radiofrequency Cautery",
                type: "Hemostasis & Excision",
                isLatestTech: true,
                duration: "5 Minutes",
                safetyProfile: "Ultra-Precise",
                description: "Provides pin-point hemostasis during complex recurrent chalazia excision, minimizing tissue trauma.",
                tags: ["Radiofrequency", "Hemostasis"]
            }
        ],
        machineHighlight: {
            title: "SURGICAL INSTRUMENTATION",
            description: "Surgeries use **Titanium Meyhoefer Curettes** paired with **Desmarres Eyelid Clamp assemblies** for complete granuloma clearance."
        },
        quickFacts: [
            { label: "Scar Visibility", value: "0% external skin scarring due to internal trans-conjunctival approach." },
            { label: "Recurrence Rate", value: "Under 1.5% following complete fibrous sac curettage." }
        ],
        faqs: [
            {
                question: "Will the incision leave a visible mark?",
                answer: "No. The procedure is performed entirely from the inner surface (conjunctival side) of the inverted eyelid, ensuring zero external facial skin scarring."
            },
            {
                question: "What if I do not want surgical curettage?",
                answer: "For non-infected or smaller chalazia, intralesional corticosteroid micro-injection is an excellent alternative that shrinks the nodule over 1 to 2 weeks."
            },
            {
                question: "Is the surgical procedure painful?",
                answer: "Local anesthetic drops and a tiny injection completely numb the eyelid. You will feel light pressure during the procedure, but no sharp pain."
            },
            {
                question: "How long must I wear an eye patch after surgery?",
                answer: "A tight pressure patch is applied for approximately 2 to 4 hours post-procedure to prevent bruising, after which it can be safely removed."
            },
            {
                question: "Why do I keep getting recurrent chalazia?",
                answer: "Recurrent chalazia are often linked to unmanaged underlying blepharitis, meibomian gland dysfunction, or ocular rosacea, which must be addressed concurrently."
            }
        ]
    },

    "pterygium": {
        id: "pterygium",
        name: "Pterygium (Surfer's Eye)",
        category: "Cornea & Ocular Surface Reconstruction",
        view: "front",
        tagline: "Sutureless conjunctival autografting with biological fibrin tissue glue.",
        hotspot: { x: 38, y: 50 },
        zoomInset: {
            structure: "Limbal Fibrovascular Tissue",
            procedure: "Precision excision of corneal head and limbal stem cell conjunctival autografting using fibrin adhesive."
        },
        detailsCard: {
            duration: "25-30 Mins",
            recovery: "3-5 Days",
            anesthesia: "Topical & Sub-Conjunctival",
            successRate: "99.2%",
            hospitalStay: "Day Surgery Unit"
        },
        treatment: {
            heading: "Modern No-Stitch Pterygium Excision with Limbal Autografting",
            paragraphs: [
                "A pterygium is a triangular, non-cancerous growth of vascularized conjunctival tissue that invades the limbus and advances across the clear cornea. Driven primarily by chronic exposure to ultraviolet (UV) radiation, dust, and wind, advancing pterygia induce irregular corneal astigmatism and threaten the central visual axis.",
                "Historical excision methods suffered from high recurrence rates of up to 40%. Our corneal surgeons utilize micro-dissection to peel the pterygium head off the cornea, combined with a sutureless conjunctival stem-cell autograft secured using human fibrin tissue glue. This reduces recurrence rates to less than 1% while maximizing post-operative ocular comfort."
            ]
        },
        procedureSteps: [
            {
                title: "Corneal Topographical Surface Mapping",
                description: "Pre-operative topography to map irregular astigmatism induced by the pterygium apex."
            },
            {
                title: "Sub-Conjunctival Anesthetic Infiltration",
                description: "Administration of local anesthetic beneath the body of the pterygium to elevate tissue planes."
            },
            {
                title: "Micro-Dissection of Corneal Head",
                description: "Peeling the fibrovascular head cleanly off Bowman's layer of the cornea using a crescent microsurgical blade."
            },
            {
                title: "Harvesting Superior Conjunctival Autograft",
                description: "Obtaining a ultra-thin graft containing limbal stem cells from the patient's superior bulbar conjunctiva."
            },
            {
                title: "Biological Fibrin Tissue Glue Fixation",
                description: "Securing the graft onto the bare sclera bed using dual-component thrombin-fibrinogen tissue glue without sutures."
            },
            {
                title: "Post-Operative Bandage Lens Placement",
                description: "Application of a high-oxygen permeability contact lens to cover the smooth corneal epithelium during re-epithelialization."
            }
        ],
        technologies: [
            {
                name: "Fibrin Tissue Glue (Tisseel / Beriplast)",
                type: "Sutureless Grafting",
                isLatestTech: true,
                duration: "Applied in Seconds",
                safetyProfile: "Biocompatible Biological Glue",
                description: "Dual-component human plasma protein sealant that eliminates painful foreign body sensation associated with sutures.",
                tags: ["Sutureless", "Biological Glue", "Fast Healing"]
            },
            {
                name: "Limbal Stem Cell Autografting (CAG)",
                type: "Reconstructive Surgery",
                isLatestTech: true,
                duration: "15 Minutes",
                safetyProfile: "Gold Standard",
                description: "Transplanting healthy stem cells from the superior limbus to restore the natural physiological barrier against regrowth.",
                tags: ["Autograft", "Stem Cell Barrier"]
            },
            {
                name: "Intraoperative Mitomycin-C (MMC)",
                type: "Anti-Fibrotic Adjunct",
                isLatestTech: false,
                duration: "2-Minute Application",
                safetyProfile: "Controlled Dosage",
                description: "Low-dose antimetabolite applied to the exposed scleral bed in complex or recurrent cases to inhibit fibroblast proliferation.",
                tags: ["Anti-Fibrotic", "Recurrence Prevention"]
            }
        ],
        machineHighlight: {
            title: "MICROSURGICAL PLATFORM",
            description: "Surgeries are conducted under the **ZEISS OPMI Lumera 700 Operating Microscope** featuring Stereo Coaxial Illumination."
        },
        quickFacts: [
            { label: "Recurrence Reduction", value: "Recurrence drops from ~40% (bare sclera) to <1% with glue autograft." },
            { label: "Suture Discomfort", value: "Zero suture prickling; tissue glue dissolves naturally within 10-14 days." }
        ],
        faqs: [
            {
                question: "Can a pterygium grow back after modern surgery?",
                answer: "With our advanced conjunctival autograft technique secured by biological fibrin glue, the recurrence rate is extremely low, sitting under 1%."
            },
            {
                question: "How long does it take for the eye to look normal again?",
                answer: "Mild redness around the graft site persists for 1 to 2 weeks. By 3 to 4 weeks, the graft blends seamlessly into surrounding conjunctiva."
            },
            {
                question: "Is modern sutureless surgery painful?",
                answer: "Because no external stitches are used, post-operative scratchiness is minimal. Pain is easily managed with mild oral analgesics and topical drops for 48 hours."
            },
            {
                question: "When can I return to swimming or outdoor sports?",
                answer: "Avoid swimming, hot tubs, and heavy dust environments for at least 3 weeks post-surgery to protect the healing graft from infection."
            },
            {
                question: "Why is UV protection important after pterygium surgery?",
                answer: "Ultraviolet light is the primary trigger for pterygium formation. Wearing 100% UV-blocking sunglasses outdoors prevents secondary tissue changes."
            }
        ]
    },

    "corneal-ulcer": {
        id: "corneal-ulcer",
        name: "Corneal Ulcer & Microbial Keratitis",
        category: "Cornea & Ocular Surface Emergency",
        view: "front",
        tagline: "Urgent antimicrobial therapy and biologic amniotic membrane wound repair.",
        hotspot: { x: 50, y: 50 },
        zoomInset: {
            structure: "Corneal Epithelium & Stroma",
            procedure: "Microbial scraping, intensive fortified antibiotic delivery, and cryogenic amniotic membrane graft placement."
        },
        detailsCard: {
            duration: "20-30 Mins",
            recovery: "2-4 Weeks",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "95.6%",
            hospitalStay: "Emergency Outpatient / Daycare"
        },
        treatment: {
            heading: "Emergency Corneal Preservation & Biological Regeneration",
            paragraphs: [
                "A corneal ulcer is a sight-threatening loss of corneal tissue, often secondary to bacterial, fungal, Acanthamoeba, or viral infection. Frequently linked to contact lens over-wear or corneal micro-trauma, keratitis can rapidly progress to stromal melting, deep perforation, and permanent visual scarring if not arrested immediately.",
                "Our emergency corneal service offers immediate microbiological scrapings and culture sensitivity profiling. While laboratory cultures process, we initiate fortified broad-spectrum antimicrobial therapy combined with biologic sutureless amniotic membrane overlays (ProKera) to suppress tissue-destructive collagenase enzymes and promote rapid re-epithelialization."
            ]
        },
        procedureSteps: [
            {
                title: "Emergency Slit-Lamp Biomicroscopy & Infiltration Depth Staging",
                description: "Assessing anterior chamber cell/flare, hypopyon level, and stromal depth of infiltrate."
            },
            {
                title: "Microbiological Diagnostic Scraping",
                description: "Obtaining scrapings from the active ulcer border using a sterile Kimura spatula for Gram stain and culture plating."
            },
            {
                title: "Fortified Antimicrobial Instillation",
                description: "Initiating loading doses of fortified vancomycin, tobramycin, or voriconazole drops every 15-30 minutes."
            },
            {
                title: "Collagenase Inhibition Therapy",
                description: "Applying topical systemic doxycycline and serum drops to neutralize stromal melting enzymes."
            },
            {
                title: "ProKera Biologic Amniotic Membrane Insertion",
                description: "Placing a therapeutic contact-lens-mounted cryogenic amniotic membrane to deliver anti-scarring growth factors."
            },
            {
                title: "Serial Corneal Re-Epithelialization Tracking",
                description: "Daily digital fluorescein tracking to confirm defect shrinkage and stromal stabilization."
            }
        ],
        technologies: [
            {
                name: "ProKera Cryopreserved Amniotic Membrane",
                type: "Biologic Wound Healing",
                isLatestTech: true,
                duration: "5-Minute Placement",
                safetyProfile: "FDA Cleared Biologic",
                description: "Contains heavy-chain hyaluronic acid (HC-HA/PTX3) complex that reduces pain, halts scarring, and accelerates corneal healing.",
                tags: ["Amniotic Membrane", "Biologic Repair", "Anti-Scarring"]
            },
            {
                name: "Corneal Culture & Sensitivity Suite",
                type: "Microbiological Diagnostics",
                isLatestTech: false,
                duration: "24-72 Hour Incubation",
                safetyProfile: "Targeted Therapy Guide",
                description: "Inoculation onto blood, chocolate, Sabouraud dextrose, and non-nutrient agar plates to identify exact pathogen strains.",
                tags: ["Microbiology", "Targeted Antibiotics"]
            },
            {
                name: "In-Vivo Confocal Microscopy (HRT III RCM)",
                type: "High-Resolution Cellular Imaging",
                isLatestTech: true,
                duration: "10 Minutes",
                safetyProfile: "Non-Invasive Optical Scraping",
                description: "Optical sectioning imaging designed to visualize Acanthamoeba cysts and fungal hyphae directly within live corneal stroma.",
                tags: ["Confocal Microscopy", "Acanthamoeba Detection"]
            }
        ],
        machineHighlight: {
            title: "DIAGNOSTIC MICROSCOPY",
            description: "Corneal micro-structures are visualized in real-time using the **Heidelberg Retina Tomograph (HRT III) with Rostock Cornea Module**."
        },
        quickFacts: [
            { label: "Emergency Priority", value: "Same-day immediate evaluation to prevent deep corneal perforation." },
            { label: "Epithelial Healing", value: "Amniotic membrane accelerates full surface closure within 5-7 days." }
        ],
        faqs: [
            {
                question: "Is a corneal ulcer considered a medical emergency?",
                answer: "Yes. Corneal ulcers require immediate evaluation and intensive treatment to prevent deep infection, corneal perforation, and permanent visual loss."
            },
            {
                question: "Can a corneal ulcer cause permanent blindness?",
                answer: "If left untreated, severe central corneal ulcers can leave dense white scars or cause globe perforation. Early intervention protects your visual axis."
            },
            {
                question: "How long does it take for a corneal ulcer to heal?",
                answer: "Infection resolution and surface epithelial closure typically take 1 to 3 weeks, though full stromal scar remolding can take several months."
            },
            {
                question: "What is ProKera and why is it used?",
                answer: "ProKera is a therapeutic tissue device containing cryopreserved amniotic membrane held in a dual-ring system. It delivers natural anti-inflammatory growth factors."
            },
            {
                question: "Can I wear contact lenses again after having a corneal ulcer?",
                answer: "You must refrain from wearing contact lenses until the active ulcer is completely healed and your doctor grants permission, often requiring a new lens fitting."
            }
        ]
    },

    "strabismus": {
        id: "strabismus",
        name: "Strabismus (Crossed Eyes)",
        category: "Pediatric Ophthalmology & Adult Strabismus",
        view: "front",
        tagline: "Surgical muscle recession/resection with fine-tuning adjustable sutures.",
        hotspot: { x: 32, y: 50 },
        zoomInset: {
            structure: "Extraocular Rectus Muscle",
            procedure: "Surgical recession or resection of extraocular muscle insertions with post-operative adjustable knot alignment."
        },
        detailsCard: {
            duration: "45-60 Mins",
            recovery: "1-2 Weeks",
            anesthesia: "General or Local w/ Sedation",
            successRate: "96.4%",
            hospitalStay: "Day Surgery Unit"
        },
        treatment: {
            heading: "Precision Extraocular Muscle Realignment Surgery",
            paragraphs: [
                "Strabismus is a ocular misalignment condition where the visual axes of the two eyes fail to focus on a single target, leading to diplopia (double vision) in adults and amblyopia (lazy eye) or loss of 3D stereopsis in pediatric patients. Driven by extraocular muscle imbalance, treatment aims to re-establish binocular alignment.",
                "Our strabismus service performs extraocular muscle recession (loosening overactive muscles) and muscle resection (tightening underactive muscles). In complex adult cases, we integrate adjustable suture techniques, allowing our surgeons to fine-tune eye position post-operatively in a comfortable clinic setting."
            ]
        },
        procedureSteps: [
            {
                title: "Prism Alternating Cover Diagnostic Measurement",
                description: "Quantifying strabismus alignment deviation in prism diopters across 9 gaze vectors."
            },
            {
                title: "Conjunctival Micro-Incision (PARK Approach)",
                description: "Accessing the extraocular rectus muscle insertions via limbal or fornix conjunctival openings."
            },
            {
                title: "Muscle Isolation & Muscle Hook Capture",
                description: "Isolating the rectus muscle belly on a muscle hook and securing muscle insertion with absorbable sutures."
            },
            {
                title: "Recession or Resection Execution",
                description: "Surgically re-positioning the muscle insertion posteriorly (recession) or shortening its length (resection)."
            },
            {
                title: "Adjustable Sliding Suture Node Placement",
                description: "Securing the repositioned muscle to the sclera using a sliding bow-tie knot node."
            },
            {
                title: "Post-Operative Alignment Fine-Tuning",
                description: "Evaluating ocular alignment under topical drops post-procedure, sliding the suture knot to achieve perfect 0-degree parallelism."
            }
        ],
        technologies: [
            {
                name: "Adjustable Suture Realignment System",
                type: "Surgical Refinement",
                isLatestTech: true,
                duration: "10-Minute Adjustment",
                safetyProfile: "High Accuracy Alignment",
                description: "Allows the surgeon to adjust muscle tension hours after surgery under local drops, dramatically lowering re-operation rates.",
                tags: ["Adjustable Suture", "Precision Alignment"]
            },
            {
                name: "Botulinum Toxin Chemodenervation",
                type: "Non-Surgical Injection",
                isLatestTech: false,
                duration: "5 Minutes",
                safetyProfile: "Minimal Downtime",
                description: "Micro-injection of botulinum toxin directly into an overactive rectus muscle under electromyographic (EMG) guidance to correct small angle deviations.",
                tags: ["Botox", "EMG Guided", "Minimal Invasive"]
            },
            {
                name: "Synoptophore Binocular Vision Evaluation",
                type: "Diagnostic Orthoptics",
                isLatestTech: false,
                duration: "20 Minutes",
                safetyProfile: "Non-Invasive Diagnostic",
                description: "Diagnostic apparatus measuring sensory fusion capacity and stereoscopic depth perception before and after realignment.",
                tags: ["Orthoptics", "Stereopsis"]
            }
        ],
        machineHighlight: {
            title: "ORTHOPTIC DIAGNOSTIC PLATFORM",
            description: "Binocular sensory fusion status is profiled using the **Clement Clarke Synoptophore (Model 2001)**."
        },
        quickFacts: [
            { label: "Surgical Alignment", value: "Primary success rate >95% using adjustable suture fine-tuning." },
            { label: "Recovery Time", value: "Normal daily light activities can be resumed within 3 to 5 days." }
        ],
        faqs: [
            {
                question: "Can strabismus surgery be performed on adults?",
                answer: "Yes! Strabismus surgery is highly successful in adults of any age, restoring binocular depth perception, eliminating double vision, and improving facial symmetry."
            },
            {
                question: "How does adjustable suture surgery work?",
                answer: "The muscle is secured with a temporary sliding knot. Later that day, alignment is re-checked; if minor misalignment remains, the knot is adjusted under numbing drops."
            },
            {
                question: "Is strabismus surgery painful?",
                answer: "The surgery is performed under general anesthesia or local block with sedation. Post-operative discomfort feels like a mild scratchiness and is well managed with eye drops."
            },
            {
                question: "Will my child need to wear glasses after strabismus surgery?",
                answer: "Surgery corrects physical muscle alignment. If your child has refractive errors (like hyperopia or astigmatism), corrective glasses will still be needed for clear focus."
            },
            {
                question: "How many surgeries are required?",
                answer: "Over 85-90% of cases achieve alignment in a single procedure. Complex cases or multi-muscle involvement may occasionally require a minor follow-up adjustment."
            }
        ]
    },

    "blepharitis": {
        id: "blepharitis",
        name: "Blepharitis",
        category: "Anterior Segment & Eyelid Margin Disease",
        view: "front",
        tagline: "Electromechanical lid margin debridement and Demodex mite eradication.",
        hotspot: { x: 58, y: 28 },
        zoomInset: {
            structure: "Eyelash Follicles & Lid Margin",
            procedure: "High-speed micro-sponge debridement of bacterial biofilm and Demodex collarettes along eyelash roots."
        },
        detailsCard: {
            duration: "10-15 Mins",
            recovery: "Immediate",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "98.1%",
            hospitalStay: "Outpatient Visit"
        },
        treatment: {
            heading: "Electromechanical Biofilm Debridement & Lid Margin Hygiene",
            paragraphs: [
                "Blepharitis is a chronic inflammatory condition affecting the eyelids and eyelash follicles. Anterior blepharitis is characterized by bacterial biofilm buildup, cylindrical dandruff collarettes, and Demodex folliculorum infestation along the base of the cilia, triggering persistent redness, burning, and eyelid rim scaling.",
                "Standard home scrub remedies often fail to disrupt hardened bacterial matrix. Our clinical suite utilizes BlephEx electromechanical micro-exfoliation to mechanically strip away crusts and bacterial exotoxins from the lid margins, paired with tea tree oil derivatives (Ivermectin/Terpinen-4-ol) for complete Demodex eradication."
            ]
        },
        procedureSteps: [
            {
                title: "High-Magnification Slit-Lamp Follicular Inspection",
                description: "Examining eyelash roots under 16x magnification to identify Demodex collarettes and staphylococcal scurf."
            },
            {
                title: "Topical Anesthetic Instillation",
                description: "Applying numbing eye drops to prevent tickling or discomfort during mechanical scrub debridement."
            },
            {
                title: "BlephEx Micro-Sponge Saturation",
                description: "Moistening a sterile single-use medical-grade micro-sponge with targeted lid cleaning solution."
            },
            {
                title: "Electromechanical Lid Margin Exfoliation",
                description: "Spinning the high-speed micro-sponge along the upper and lower eyelid margins to clear biofilm."
            },
            {
                title: "Thermal Softening & Meibomian Expression",
                description: "Applying localized thermal compresses followed by gentle manual clearing of gland orifice caps."
            },
            {
                title: "Eyelash Root Terpinen-4-ol Application",
                description: "Applying specialized tea tree oil extract along eyelash follicles to eradicate remaining Demodex mites."
            }
        ],
        technologies: [
            {
                name: "BlephEx Micro-Exfoliation System",
                type: "Lid Margin Debridement",
                isLatestTech: true,
                duration: "10 Minutes",
                safetyProfile: "100% Painless & Safe",
                description: "A micro-handpiece featuring a high-speed rotating sponge that strips away years of accumulated biofilm and debris.",
                tags: ["BlephEx", "Biofilm Debridement", "Painless"]
            },
            {
                name: "Ivermectin & Terpinen-4-ol Formulation",
                type: "Anti-Demodex Ectoparasiticide",
                isLatestTech: true,
                duration: "In-Office Application",
                safetyProfile: "FDA Approved Active Ingredient",
                description: "Concentrated active ingredient derived from tea tree oil that neutralizes Demodex mites hiding inside eyelash follicles.",
                tags: ["Demodex Eradication", "Targeted Therapy"]
            },
            {
                name: "NuLids Home Maintenance System",
                type: "Patient Maintenance Device",
                isLatestTech: false,
                duration: "1 Minute Daily",
                safetyProfile: "Gentle Home Care",
                description: "Handheld daily oscillating cleaning tool designed for patients to maintain lid margin health between office visits.",
                tags: ["Home Care", "Maintenance"]
            }
        ],
        machineHighlight: {
            title: "DEBRIDEMENT PLATFORM",
            description: "Lid debridement procedures are performed using the **BlephEx System Handpiece** with single-use sterile micro-sponge tips."
        },
        quickFacts: [
            { label: "Symptom Improvement", value: "Over 90% of patients report instant reduction in eyelid itchiness." },
            { label: "Treatment Frequency", value: "Recommended every 4 to 6 months to maintain biofilm-free margins." }
        ],
        faqs: [
            {
                question: "How many BlephEx sessions will I need?",
                answer: "Most patients experience significant relief after a single session. Because biofilm naturally rebuilds over time, maintenance sessions every 4 to 6 months are recommended."
            },
            {
                question: "Is blepharitis curable?",
                answer: "Blepharitis is a chronic condition that is managed rather than permanently cured. Consistent in-office debridement and home lid hygiene keep symptoms completely controlled."
            },
            {
                question: "Does the BlephEx procedure hurt?",
                answer: "No. Numbing drops prevent discomfort. You will feel a light vibrating sensation along your eyelids as the soft micro-sponge clears debris."
            },
            {
                question: "What are Demodex mites and are they dangerous?",
                answer: "Demodex are microscopic skin mites that inhabit eyelash follicles. An overpopulation triggers inflammation and crusting. In-office cleaning effectively eradicates them."
            },
            {
                question: "Can blepharitis cause dry eyes?",
                answer: "Yes. Biofilm along the lid margins clogs oil glands, leading to rapid tear evaporation and secondary dry eye syndrome."
            }
        ]
    },

    // ===========================================================================
    // SIDE / CROSS-SECTION VIEW CONDITIONS
    // ===========================================================================

    "lasik": {
        id: "lasik",
        name: "LASIK & Refractive Surgery",
        category: "Refractive Surgery & Vision Correction",
        view: "side",
        tagline: "Blade-free femtosecond corneal flap creation and custom topology-guided laser ablation.",
        hotspot: { x: 18, y: 42 },
        zoomInset: {
            structure: "Corneal Stromal Layer",
            procedure: "Creation of a 90-micron corneal flap using a femtosecond laser followed by sub-micron excimer stromal reshaping."
        },
        detailsCard: {
            duration: "10-15 Mins",
            recovery: "24 Hours",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "99.7%",
            hospitalStay: "Outpatient Refractive Suite"
        },
        treatment: {
            heading: "Bladeless Custom Wavefront LASIK & SMILE Refractive Correction",
            paragraphs: [
                "Refractive errors—including myopia (nearsightedness), hyperopia (farsightedness), and astigmatism—occur when the eye's axial length and corneal curvature fail to focus light rays directly onto the retina. Modern bladeless LASIK corrects visual focus by precisely modifying corneal stromal curvature.",
                "Our refractive suite utilizes a 100% blade-free two-step technique: a Femtosecond laser creates an ultra-thin sub-100 micron corneal flap in under 10 seconds, followed by a custom topology-guided Excimer laser (Contoura Vision). Mapping 22,000 unique elevation points on your cornea, Contoura eliminates microscopic optical aberrations, offering visual outcomes superior to standard glasses or contact lenses."
            ]
        },
        procedureSteps: [
            {
                title: "Corneal Topographical & Tomographical Mapping",
                description: "Capturing 22,000 elevation points using Pentacam and WaveLight Topolyzer Vario scanning."
            },
            {
                title: "Topical Drop Anesthesia Instillation",
                description: "Numbing the eye surface with topical proparacaine drops to ensure a completely painless experience."
            },
            {
                title: "Femtosecond Laser Flap Creation",
                description: "Creating an ultra-thin, planar corneal flap using high-frequency infra-red laser micro-pulses in 9 seconds."
            },
            {
                title: "Topology-Guided Excimer Laser Ablation",
                description: "Reshaping stromal tissue with custom excimer spot laser pulses guided by sub-micron wavefront data."
            },
            {
                title: "Flap Repositioning & Interface Irrigation",
                description: "Washing the stromal bed with balanced salt solution and smoothing the flap back without stitches."
            },
            {
                title: "Post-Laser Flap Adhesion & Slit-Lamp Clearance",
                description: "Allowing natural endothelial suction to seal the flap within 2 minutes followed by final surgeon microscopic inspection."
            }
        ],
        technologies: [
            {
                name: "Contoura Vision Topology-Guided LASIK",
                type: "Refractive Excimer Laser",
                isLatestTech: true,
                duration: "10 Seconds per Eye",
                safetyProfile: "US-FDA Approved",
                description: "Maps unique corneal elevation contours to treat corneal irregularities and refractive errors with sub-micron accuracy.",
                tags: ["Contoura", "Wavefront", "FDA Approved"]
            },
            {
                name: "WaveLight FS200 Femtosecond Laser",
                type: "Flap Creation Laser",
                isLatestTech: true,
                duration: "6-8 Seconds",
                safetyProfile: "Ultra-Safe Bladeless",
                description: "Delivers fast flap creation times with reproducible thickness, low vacuum stress, and smooth hinge formation.",
                tags: ["Femtosecond", "Bladeless", "Fast"]
            },
            {
                name: "Pentacam HR Corneal Tomography",
                type: "Pre-Operative Screening",
                isLatestTech: true,
                duration: "2 Seconds Scan",
                safetyProfile: "100% Non-Invasive",
                description: "Rotating Scheimpflug camera capturing 50 3D cross-sectional images to exclude subclinical keratoconus or corneal thinning.",
                tags: ["Pentacam", "Safety Screening"]
            }
        ],
        machineHighlight: {
            title: "REFRACTIVE SURGICAL SUITE",
            description: "Refractive procedures are performed on the **Alcon WaveLight Refractive Suite (FS200 Femtosecond + EX500 Excimer Laser)**."
        },
        quickFacts: [
            { label: "Visual Recovery", value: "Over 98% of patients achieve 20/20 vision or better within 24 hours." },
            { label: "Laser Time", value: "Actual excimer laser reshapes the cornea in under 10 seconds per eye." }
        ],
        faqs: [
            {
                question: "Does LASIK hurt?",
                answer: "No. Numbing eye drops are administered before the procedure. You will feel a light pressure sensation for a few seconds while the laser operates, but no sharp pain."
            },
            {
                question: "How fast is visual recovery after LASIK?",
                answer: "Most patients notice clear visual improvement within hours and can comfortably drive and return to office work the very next day."
            },
            {
                question: "Am I a suitable candidate for LASIK?",
                answer: "Candidates must be at least 18 years old with a stable prescription for one year, healthy corneas, and adequate corneal stromal thickness as verified on Pentacam scans."
            },
            {
                question: "What is the difference between LASIK and SMILE?",
                answer: "LASIK creates a hinged corneal flap to reshape the stroma underneath, whereas SMILE extracts a tiny lens-shaped tissue lenticule through a keyhole incision without creating a flap."
            },
            {
                question: "Can LASIK vision correction wear off over time?",
                answer: "The corneal structural reshaping performed during LASIK is permanent. Natural aging of the internal lens (presbyopia) can still occur after age 40, requiring reading glasses."
            }
        ]
    },

    "cataract": {
        id: "cataract",
        name: "Cataract Surgery & IOL Implantation",
        category: "Anterior Segment & Lens Implant Surgery",
        view: "side",
        tagline: "Robotic femtosecond laser-assisted cataract surgery paired with premium trifocal IOLs.",
        hotspot: { x: 30, y: 48 },
        zoomInset: {
            structure: "Crystalline Lens Capsule",
            procedure: "Femtosecond laser capsulotomy, ultrasonic phacoemulsification of opaque crystalline lens, and foldable trifocal IOL placement."
        },
        detailsCard: {
            duration: "10-15 Mins",
            recovery: "24-48 Hours",
            anesthesia: "Topical Drop Anesthesia",
            successRate: "99.8%",
            hospitalStay: "Same-Day Outpatient"
        },
        treatment: {
            heading: "Femtosecond Laser-Assisted Cataract Surgery (FLACS) & Premium Optics",
            paragraphs: [
                "A cataract is the progressive clouding of the eye's natural crystalline lens, typically caused by oxidative stress, aging, diabetes, or long-term steroid use. As proteins clump within the lens matrix, visual contrast decreases, glare around lights intensifies, and colors become yellowed and dull.",
                "Modern cataract surgery is a painless 10-minute micro-incisional procedure. We offer robotic Femtosecond Laser-Assisted Cataract Surgery (FLACS) to perform 3D micro-incisions, circular capsulotomies, and laser lens pre-fragmentation. The softened cataract is gently aspirated using active fluidic phacoemulsification, followed by implantation of a customized Trifocal or Extended Depth of Focus (EDOF) intraocular lens."
            ]
        },
        procedureSteps: [
            {
                title: "Optical Biometry & IOL Power Calculation",
                description: "Swept-source OCT measurement of axial length and corneal power using the IOLMaster 700."
            },
            {
                title: "Topical Anesthesia Drop Instillation",
                description: "Numbing the eye using topical anesthetic drops without needles, injections, or retrobulbar blocks."
            },
            {
                title: "Femtosecond Laser Capsulotomy & Pre-Cutting",
                description: "Creating a perfectly centered 5.0mm circular capsulotomy and segmenting the cataract lens into soft micro-cubes."
            },
            {
                title: "Active Fluidic Phacoemulsification",
                description: "Aspirating pre-fragmented lens material through a self-sealing 2.2mm micro-incision using active pressure management."
            },
            {
                title: "Capsular Bag Polish & Cleaning",
                description: "Micro-vacuuming epithelial cells from the posterior capsule to prevent secondary capsule opacification."
            },
            {
                title: "Foldable Premium IOL Injection & Centration",
                description: "Injecting a foldable Trifocal or Toric IOL inside the capsular bag and confirming optical alignment."
            }
        ],
        technologies: [
            {
                name: "CENTURION Vision System with Active Fluidics",
                type: "Phacoemulsification System",
                isLatestTech: true,
                duration: "10 Minutes",
                safetyProfile: "Ultra-Safe Micro-Incision",
                description: "Automatically monitors and maintains intraocular pressure during emulsification, protecting corneal endothelial cells.",
                tags: ["Centurion", "Active Fluidics", "Micro-Incision"]
            },
            {
                name: "Alcon LenSx Femtosecond Laser",
                type: "Robotic Laser Cataract Surgery",
                isLatestTech: true,
                duration: "2-3 Minutes",
                safetyProfile: "Computer-Guided Accuracy",
                description: "Performs precise laser incisions, capsulotomies, and lens fragmentation guided by real-time OCT imaging.",
                tags: ["LenSx", "Femtosecond", "Laser Cataract"]
            },
            {
                name: "ZEISS IOLMaster 700 Swept-Source OCT Biometer",
                type: "Pre-Operative Optical Biometry",
                isLatestTech: true,
                duration: "Under 1 Minute",
                safetyProfile: "Non-Contact Measurement",
                description: "Swept-source OCT biometer providing high-precision IOL calculations, even through dense cataracts.",
                tags: ["Biometry", "IOL Calculation", "Swept-Source"]
            }
        ],
        machineHighlight: {
            title: "CATARACT SURGICAL SUITE",
            description: "Surgeries utilize the **Alcon LenSx Femtosecond Laser** coupled with the **CENTURION Vision System Phacoemulsifier**."
        },
        quickFacts: [
            { label: "Sutureless Closure", value: "100% self-sealing micro-incisions; no stitches or eye patches required." },
            { label: "Spectacle Independence", value: "Over 92% of Trifocal IOL patients achieve total freedom from glasses." }
        ],
        faqs: [
            {
                question: "How long does modern cataract surgery take?",
                answer: "The surgical procedure takes 10 to 15 minutes per eye. You will be comfortably resting in our daycare lounge for about an hour overall."
            },
            {
                question: "Will I need to wear glasses after cataract surgery?",
                answer: "With premium Trifocal or Extended Depth of Focus (EDOF) IOLs, most patients achieve complete independence from reading and distance glasses."
            },
            {
                question: "Is cataract surgery painful?",
                answer: "No. Topical numbing eye drops ensure you remain completely comfortable. You will see light patterns during the procedure without sharp discomfort."
            },
            {
                question: "Can a cataract grow back after surgery?",
                answer: "No, a natural cataract cannot grow back. The capsule supporting the IOL can occasionally become hazy months later, which is easily cleared in 2 minutes using YAG laser capsulotomy."
            },
            {
                question: "Are both eyes operated on the same day?",
                answer: "Surgeries are typically scheduled 1 to 7 days apart to allow the first eye to settle before operating on the second eye."
            }
        ]
    },

    "glaucoma": {
        id: "glaucoma",
        name: "Glaucoma Management & MIGS",
        category: "Glaucoma & Intraocular Pressure Control",
        view: "side",
        tagline: "Micro-Invasive Glaucoma Surgery (MIGS) and Selective Laser Trabeculoplasty (SLT).",
        hotspot: { x: 25, y: 35 },
        zoomInset: {
            structure: "Trabecular Meshwork & Schlemm's Canal",
            procedure: "Implantation of micro-bypass stents into the trabecular meshwork or non-invasive selective laser photo-stimulation."
        },
        detailsCard: {
            duration: "10-20 Mins",
            recovery: "24-48 Hours",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "95.2%",
            hospitalStay: "Outpatient Day Procedure"
        },
        treatment: {
            heading: "Micro-Invasive Glaucoma Surgery (MIGS) & Selective Laser Therapy",
            paragraphs: [
                "Glaucoma, often called the silent thief of sight, is a group of progressive optic neuropathies characterized by elevated intraocular pressure (IOP) that compresses and destroys delicate optic nerve ganglion cells. Left unchecked, peripheral field loss advances irreversibly toward central tunnel vision.",
                "Our glaucoma service focuses on lowering intraocular pressure before nerve damage progresses. We offer Selective Laser Trabeculoplasty (SLT)—a 5-minute office laser procedure that stimulates natural fluid drainage—alongside Micro-Invasive Glaucoma Surgery (MIGS) implants such as the iStent inject W. These micro-stents bypass blocked trabecular meshwork, reducing or eliminating daily eye drop regimens."
            ]
        },
        procedureSteps: [
            {
                title: "Gonioscopic Angle & OCT Ganglion Cell Analysis",
                description: "Visualizing the anterior chamber drainage angle and measuring nerve fiber layer thickness."
            },
            {
                title: "Topical Drop Anesthesia Instillation",
                description: "Numbing the eye surface with topical anesthetic drops to ensure zero procedure discomfort."
            },
            {
                title: "Selective Laser Trabeculoplasty (SLT Execution)",
                description: "Delivering low-energy 532nm laser energy to selective pigmented meshwork cells to stimulate drainage."
            },
            {
                title: "Micro-Incisional Entry (If MIGS Combined)",
                description: "Creating a self-sealing 1.8mm clear corneal incision under intraoperative gonioscopic visualization."
            },
            {
                title: "iStent inject W Micro-Stent Insertion",
                description: "Implanting dual heparin-coated titanium micro-stents into Schlemm's canal to establish direct aqueous outflow."
            },
            {
                title: "Post-Procedure Pressure Spikes Check",
                description: "Monitoring intraocular pressure 1 to 2 hours post-procedure to confirm smooth outflow."
            }
        ],
        technologies: [
            {
                name: "iStent inject W Trabecular Micro-Bypass",
                type: "MIGS Implant",
                isLatestTech: true,
                duration: "5-10 Minutes",
                safetyProfile: "Micro-Scale High Safety",
                description: "Medical implants designed to bypass trabecular obstruction and restore continuous natural fluid drainage.",
                tags: ["iStent", "MIGS", "Micro-Implant"]
            },
            {
                name: "Selective Laser Trabeculoplasty (SLT Laser)",
                type: "Non-Invasive Laser Therapy",
                isLatestTech: true,
                duration: "5 Minutes",
                safetyProfile: "Painless Office Procedure",
                description: "Delivers low-energy light pulses targeting pigmented trabecular cells without thermal damage to surrounding tissue.",
                tags: ["SLT", "Laser", "Non-Invasive"]
            },
            {
                name: "Humphrey Field Analyzer III (HFA3)",
                type: "Visual Field Diagnostics",
                isLatestTech: true,
                duration: "10 Minutes per Eye",
                safetyProfile: "Non-Invasive Visual Testing",
                description: "Gold-standard automated visual field perimeter utilizing SITA-Faster strategies to detect subtle glaucoma progression.",
                tags: ["Humphrey", "Visual Field", "Diagnostics"]
            }
        ],
        machineHighlight: {
            title: "GLAUCOMA DIAGNOSTIC & LASER SUITE",
            description: "Glaucoma care integrates the **Ellex Tango Reflex SLT Laser** with **ZEISS Humphrey Field Analyzer III**."
        },
        quickFacts: [
            { label: "IOP Reduction", value: "Average reduction of 25-35% in intraocular pressure following MIGS/SLT." },
            { label: "Drop Reduction", value: "Over 75% of patients eliminate at least one daily pressure-lowering drop." }
        ],
        faqs: [
            {
                question: "Can vision lost from glaucoma be restored?",
                answer: "Vision lost to glaucoma nerve damage is permanent. Treatment focuses on lowering eye pressure to preserve remaining vision."
            },
            {
                question: "What is MIGS and how does it help?",
                answer: "Micro-Invasive Glaucoma Surgery (MIGS) uses microscopic stents placed in the eye's drainage angle to lower intraocular pressure safely with minimal recovery time."
            },
            {
                question: "Is Selective Laser Trabeculoplasty (SLT) painful?",
                answer: "No. SLT is a painless, 5-minute office laser procedure performed while sitting upright. Numbing drops prevent any discomfort."
            },
            {
                question: "Why do I need treatment if I have no symptoms?",
                answer: "Glaucoma progresses silently without pain or early vision loss. Waiting for symptoms means nerve fibers have already been permanently damaged."
            },
            {
                question: "Will I still need eye drops after iStent surgery?",
                answer: "Many patients are able to stop or reduce their daily glaucoma eye drops post-MIGS, though your doctor will determine your target pressure."
            }
        ]
    },

    "vitreous-hemorrhage": {
        id: "vitreous-hemorrhage",
        name: "Vitreous Hemorrhage",
        category: "Vitreoretinal Surgery & Trauma Care",
        view: "side",
        tagline: "Sutureless 27-gauge micro-incision vitrectomy surgery (MIVS).",
        hotspot: { x: 55, y: 50 },
        zoomInset: {
            structure: "Vitreous Cavity & Posterior Segment",
            procedure: "Removal of dense vitreous blood clots using high-speed micro-cutters and endo-laser leak sealing."
        },
        detailsCard: {
            duration: "30-45 Mins",
            recovery: "1-2 Weeks",
            anesthesia: "Local Block with Sedation",
            successRate: "96.1%",
            hospitalStay: "Same-Day Outpatient"
        },
        treatment: {
            heading: "Sutureless 27-Gauge Micro-Incision Vitrectomy Surgery (MIVS)",
            paragraphs: [
                "Vitreous hemorrhage occurs when blood extravasates into the gel-filled vitreous cavity, blocking the light path to the retina. Common causes include proliferative diabetic retinopathy, retinal tear rupture of bridging vessels, retinal vein occlusion, or blunt ocular trauma. Patients experience sudden floaters, dark streaks, or complete red vision blockage.",
                "While mild hemorrhages are monitored, dense non-clearing blood requires high-speed Vitrectomy Surgery. Utilizing 27-gauge sutureless instrumentation, our vitreoretinal surgeons clear blood turbidity, relieve vitreous traction, and apply endo-laser photocoagulation to seal retinal leaks in a single outpatient procedure."
            ]
        },
        procedureSteps: [
            {
                title: "B-Scan Diagnostic Ultrasonography",
                description: "Using sound wave imaging to rule out underlying retinal detachment behind dense vitreous blood."
            },
            {
                title: "Retrobulbar Local Anesthetic Block",
                description: "Administering a nerve block with mild sedation to ensure complete immobility and comfort."
            },
            {
                title: "27-Gauge Sutureless Trocar Placement",
                description: "Inserting three microscopic 27-gauge valved trocars through the pars plana into the vitreous body."
            },
            {
                title: "High-Speed Vitreous Aspiration & Cutting",
                description: "Aspirating blood-laden vitreous gel using a 10,000 CPM ultra-high-speed vitreotome."
            },
            {
                title: "Intraoperative Endo-Laser Photocoagulation",
                description: "Directing an internal laser probe to seal bleeding micro-vessels or underlying retinal tears."
            },
            {
                title: "Fluid-Gas Exchange & Trocar Removal",
                description: "Replacing intraocular fluid with air/gas tamponade and removing trocars without external sutures."
            }
        ],
        technologies: [
            {
                name: "Constellation Vision System 10,000 CPM Vitreotome",
                type: "Vitreoretinal Surgical System",
                isLatestTech: true,
                duration: "30-45 Minutes",
                safetyProfile: "High Retinal Safety",
                description: "High-speed cutting rates reduce vitreoretinal traction, minimizing the risk of iatrogenic retinal tears during dense blood removal.",
                tags: ["Vitrectomy", "10k CPM", "Micro-Incision"]
            },
            {
                name: "Quantel Medical ABSolu B-Scan Ultrasound",
                type: "Ocular Diagnostic Imaging",
                isLatestTech: true,
                duration: "5 Minutes",
                safetyProfile: "Non-Invasive Ultrasound",
                description: "50 MHz probe technology providing high-resolution posterior segment visualization when light cannot penetrate dense blood.",
                tags: ["Ultrasound", "B-Scan", "Diagnostics"]
            },
            {
                name: "RESIGHT 700 Wide-Angle Fundus System",
                type: "Surgical Visualization",
                isLatestTech: true,
                duration: "Intraoperative",
                safetyProfile: "Non-Contact Optical System",
                description: "Provides non-contact panoramic views of the retina, allowing surgeons to clear peripheral hemorrhage safely.",
                tags: ["Wide-Field", "Surgical Optics"]
            }
        ],
        machineHighlight: {
            title: "VITREORETINAL SURGICAL SUITE",
            description: "Surgeries rely on the **Alcon Constellation Vision System** integrated with the **ZEISS RESIGHT 700 Wide-Field System**."
        },
        quickFacts: [
            { label: "Sutureless Incisions", value: "27-gauge micro-incisions seal naturally without external stitches." },
            { label: "Vision Restoration", value: "Light path cleared immediately upon removal of vitreous blood." }
        ],
        faqs: [
            {
                question: "Does vitreous hemorrhage clear on its own?",
                answer: "Mild hemorrhages can clear gradually over weeks. Persistent or dense hemorrhages blocking vision require vitrectomy surgery to protect retinal health."
            },
            {
                question: "What causes bleeding inside the eye?",
                answer: "Common causes include proliferative diabetic retinopathy, retinal tears, retinal vein occlusions, wet macular degeneration, and ocular trauma."
            },
            {
                question: "Is vitrectomy surgery painful?",
                answer: "No. Local nerve block anesthesia ensures complete comfort during and after surgery. Light scratchiness is managed with standard drops."
            },
            {
                question: "Will I need face-down positioning after surgery?",
                answer: "Face-down positioning is only required if a gas bubble is placed to seal a concurrent retinal tear. If only blood is removed, face-down positioning is unnecessary."
            },
            {
                question: "How soon after surgery will my vision improve?",
                answer: "Patients notice significant clearing of light dark shadows within days as postoperative inflammation settles and gas bubbles absorb."
            }
        ]
    },

    "uveitis": {
        id: "uveitis",
        name: "Uveitis & Ocular Inflammation",
        category: "Uveitis & Ocular Immunology",
        view: "side",
        tagline: "Targeted intraocular sustained-release steroid micro-implants and immunomodulatory control.",
        hotspot: { x: 35, y: 60 },
        zoomInset: {
            structure: "Ciliary Body & Choroidal Layer",
            procedure: "Intravitreal administration of sustained-release steroid micro-inserts (YUTIQ/Ozurdex) for long-term inflammatory control."
        },
        detailsCard: {
            duration: "10-15 Mins",
            recovery: "24-48 Hours",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "94.8%",
            hospitalStay: "Outpatient Clinic Visit"
        },
        treatment: {
            heading: "Comprehensive Uveitis & Sub-Specialty Intraocular Immunotherapy",
            paragraphs: [
                "Uveitis is inflammation of the eye's vascular middle layer (the uvea, comprising iris, ciliary body, and choroid). Driven by systemic autoimmune disorders (e.g., Ankylosing Spondylitis, Sarcoidosis, Lupus) or localized infections, chronic intraocular inflammation can precipitate secondary cataracts, elevated IOP, and cystoid macular edema (CME).",
                "Managing uveitis requires targeted anti-inflammatory control while avoiding systemic corticosteroid side effects. We offer intravitreal sustained-release implants (Ozurdex / YUTIQ) inserted via a painless in-office micro-injection. These implants deliver constant micro-doses of anti-inflammatory steroids inside the eye for up to 36 months."
            ]
        },
        procedureSteps: [
            {
                title: "Wide-Field Laser Fluorescein Angiography (FA)",
                description: "Mapping retinal vascular leakage and choroidal hyper-fluorescence to pinpoint inflammatory foci."
            },
            {
                title: "Topical Anesthesia & Povidone-Iodine Disinfection",
                description: "Numbing the ocular surface and applying 5% povidone-iodine to ensure absolute sterility."
            },
            {
                title: "Pars Plana Micro-Injection Alignment",
                description: "Measuring 3.5mm from the limbus in the inferior temporal quadrant using a surgical caliper."
            },
            {
                title: "Ozurdex / YUTIQ Micro-Insert Injection",
                description: "Injecting a biodegradable sustained-release steroid micro-implant directly into the posterior vitreous body."
            },
            {
                title: "Intraocular Pressure & Optic Nerve Perfusion Check",
                description: "Confirming central retinal artery patency and monitoring IOP immediately following insertion."
            },
            {
                title: "Systemic Immunomodulatory Co-Management",
                description: "Coordinating with rheumatologists to tailor non-steroidal biologic immunosuppressants (e.g., Adalimumab) if required."
            }
        ],
        technologies: [
            {
                name: "YUTIQ Sustained-Release Micro-Insert",
                type: "Intravitreal Drug Delivery",
                isLatestTech: true,
                duration: "Single In-Office Injection",
                safetyProfile: "Continuous 36-Month Release",
                description: "A non-bioerodible micro-insert that continuously releases 0.25 mcg/day fluocinolone acetonide to control chronic non-infectious posterior uveitis.",
                tags: ["YUTIQ", "36-Month Release", "Intravitreal"]
            },
            {
                name: "Ozurdex Dexamethasone Intravitreal Implant",
                type: "Biodegradable Steroid Implant",
                isLatestTech: true,
                duration: "Single Injection",
                safetyProfile: "Sustained 6-Month Action",
                description: "A solid biodegradable matrix that dissolves gradually over 6 months while resolving uveitic macular edema.",
                tags: ["Ozurdex", "Biodegradable", "Macular Edema"]
            },
            {
                name: "SPECTRALIS Wide-Field Fluorescein Angiography",
                type: "Diagnostic Retinal Angiography",
                isLatestTech: true,
                duration: "10 Minutes",
                safetyProfile: "High Diagnostic Precision",
                description: "High-resolution vascular imaging that detects subtle retinal vasculitis and choroidal inflammatory lesions.",
                tags: ["Fluorescein Angiography", "Spectralis"]
            }
        ],
        machineHighlight: {
            title: "DIAGNOSTIC & INJECTION SUITE",
            description: "Uveitis management utilizes the **Heidelberg SPECTRALIS HRA+OCT** platform for angiography and inflammatory tracking."
        },
        quickFacts: [
            { label: "Duration of Action", value: "YUTIQ micro-inserts suppress uveitis flare-ups continuously for 3 full years." },
            { label: "Edema Resolution", value: "Significant reduction in uveitic cystoid macular edema within 14 days." }
        ],
        faqs: [
            {
                question: "What causes uveitis?",
                answer: "Uveitis can be triggered by autoimmune conditions (such as Ankylosing Spondylitis or Sarcoidosis), localized infections, or eye trauma. Comprehensive systemic testing guides our targeted treatment plan."
            },
            {
                question: "Can uveitis recur?",
                answer: "Yes, uveitis can be recurrent. Long-term sustained-release micro-implants and immunomodulatory medications help prevent recurring flare-ups."
            },
            {
                question: "Does an intravitreal implant injection hurt?",
                answer: "No. Topical anesthetic drops completely numb the eye. You will feel a slight pressure sensation lasting only a couple of seconds."
            },
            {
                question: "What are potential side effects of intraocular steroid implants?",
                answer: "Steroid implants can induce localized intraocular pressure elevations or accelerate cataract formation, both of which are monitored and easily managed."
            },
            {
                question: "Is uveitis linked to other health conditions?",
                answer: "Approximately 50% of uveitis cases are linked to underlying systemic autoimmune conditions, requiring close collaboration with rheumatologists."
            }
        ]
    },

    "keratoconus": {
        id: "keratoconus",
        name: "Keratoconus",
        category: "Corneal Ectasia & Reconstructive Optics",
        view: "side",
        tagline: "Accelerated Corneal Collagen Cross-Linking (C3R/CXL) and customized scleral contact lenses.",
        hotspot: { x: 14, y: 45 },
        zoomInset: {
            structure: "Anterior Corneal Apex & Stroma",
            procedure: "UVA-Riboflavin photochemical cross-linking of stromal collagen fibers combined with scleral lens fitting."
        },
        detailsCard: {
            duration: "20-30 Mins",
            recovery: "3-5 Days",
            anesthesia: "Topical Anesthetic Drops",
            successRate: "98.5%",
            hospitalStay: "Outpatient Corneal Suite"
        },
        treatment: {
            heading: "Accelerated Corneal Cross-Linking (C3R/CXL) & Scleral Optics",
            paragraphs: [
                "Keratoconus is a progressive non-inflammatory ectatic corneal disorder where thinning of the central stromal matrix causes the normal round cornea to bulge into an irregular cone shape. Driven by loss of enzymatic collagen cross-links (and exacerbated by eye rubbing), keratoconus induces severe irregular astigmatism that cannot be corrected with spectacles.",
                "Our corneal service focuses on halting disease progression using Accelerated Corneal Collagen Cross-Linking (CXL/C3R). Soaking the stroma in Vitamin B2 (Riboflavin) and exposing it to controlled UVA light creates covalent bonds between collagen fibrils, stabilizing corneal architecture. High-definition vision is then restored using custom scleral contact lenses."
            ]
        },
        procedureSteps: [
            {
                title: "Pentacam Scheimpflug Ectasia Progression Analysis",
                description: "Confirming progressive stromal steepening and elevation change over baseline baseline maps."
            },
            {
                title: "Topical Anesthetic & Epithelial Micro-Debridement (Epi-Off)",
                description: "Gently loosening central 8.0mm epithelium under topical drops to facilitate deep riboflavin penetration."
            },
            {
                title: "Iso-Osmolar Riboflavin (Vitamin B2) Instillation",
                description: "Applying riboflavin drops every 2 minutes for 10-15 minutes until stromal saturation is confirmed."
            },
            {
                title: "Accelerated UVA Light Exposure (Avedro KXL)",
                description: "Delivering calibrated 365nm UVA light energy (30 mW/cm²) to cross-link collagen fibrils in 3 to 4 minutes."
            },
            {
                title: "Therapeutic Bandage Contact Lens (BCL) Application",
                description: "Placing a BCL over the cornea to shield the surface during 3-day epithelial re-growth."
            },
            {
                title: "Post-Healing Custom Scleral Lens Fitting",
                description: "Designing vaulting scleral contact lenses that sit on the white sclera, creating a smooth fluid optic reservoir."
            }
        ],
        technologies: [
            {
                name: "Avedro KXL Accelerated Cross-Linking System",
                type: "UVA Corneal Cross-Linking",
                isLatestTech: true,
                duration: "3-4 Minutes UVA",
                safetyProfile: "FDA Approved Stabilization",
                description: "Delivers high-power UVA illumination to cross-link stromal collagen, halting keratoconus progression in minutes.",
                tags: ["Avedro", "CXL", "FDA Approved", "Cross-Linking"]
            },
            {
                name: "Custom Scleral Contact Lens Profiling",
                type: "Prosthetic Corneal Optics",
                isLatestTech: true,
                duration: "Fitting Session",
                safetyProfile: "High Ocular Comfort",
                description: "Large-diameter gas-permeable lenses that vault over the irregular cone, bathing the cornea in saline for crisp optics.",
                tags: ["Scleral Lens", "Irregular Astigmatism"]
            },
            {
                name: "Intrastromal Corneal Ring Segments (Intacs / Keraring)",
                type: "Corneal Flattening Segment",
                isLatestTech: false,
                duration: "15 Minutes",
                safetyProfile: "Removable Implant",
                description: "PMMA arc segments inserted into femtosecond laser-created stromal channels to flatten corneal steepness.",
                tags: ["Intacs", "Keraring", "Femtosecond"]
            }
        ],
        machineHighlight: {
            title: "CROSS-LINKING PLATFORM",
            description: "Cross-linking procedures are powered by the **Glaukos Avedro KXL System** utilizing VibeX Riboflavin formulations."
        },
        quickFacts: [
            { label: "Progression Arrest", value: "Over 98% of treated corneas demonstrate complete arrest of cone bulging." },
            { label: "Transplant Avoidance", value: "Cross-linking eliminates the need for full-thickness corneal transplants in >95% of early cases." }
        ],
        faqs: [
            {
                question: "Can cross-linking cure keratoconus or restore my vision?",
                answer: "Cross-linking halts the progression of keratoconus by stiffening the corneal matrix. Visual acuity is subsequently restored using custom scleral contact lenses."
            },
            {
                question: "Is Corneal Cross-Linking (CXL) painful?",
                answer: "The procedure itself is painless under numbing drops. Mild to moderate discomfort and light sensitivity occur for 48-72 hours after Epi-Off cross-linking as the epithelium heals."
            },
            {
                question: "Why should eye rubbing be strictly avoided?",
                answer: "Vigorous eye rubbing breaks down fragile stromal collagen bonds, accelerating corneal thinning and cone progression in keratoconus patients."
            },
            {
                question: "What are scleral lenses and how do they work?",
                answer: "Scleral lenses are large gas-permeable lenses that rest on the white sclera, completely vaulting over the irregular corneal cone to create a perfectly smooth optical surface."
            },
            {
                question: "How long after cross-linking can I wear contact lenses again?",
                answer: "Scleral or hard contact lens fitting resumes once the corneal epithelium has fully healed and topography stabilizes, typically 4 to 6 weeks post-CXL."
            }
        ]
    },

    // ===========================================================================
    // BACK / FUNDUS VIEW CONDITIONS
    // ===========================================================================

    "retinal-detachment": {
        id: "retinal-detachment",
        name: "Retinal Detachment",
        category: "Vitreoretinal Emergency & Retinal Surgery",
        view: "back",
        tagline: "Emergency reattachment using sutureless vitrectomy, laser photocoagulation, and gas tamponade.",
        hotspot: { x: 75, y: 35 },
        zoomInset: {
            structure: "Subretinal Fluid & Peripheral Tear",
            procedure: "Drainage of subretinal fluid, 360-degree laser photocoagulation barrier, and intraocular gas bubble tamponade."
        },
        detailsCard: {
            duration: "45-90 Mins",
            recovery: "1-2 Weeks",
            anesthesia: "Local Block w/ Sedation",
            successRate: "95.4%",
            hospitalStay: "Same-Day Surgical Daycare"
        },
        treatment: {
            heading: "Emergency Vitreoretinal Repair & Laser Photocoagulation",
            paragraphs: [
                "Rhegmatogenous Retinal Detachment is an ocular emergency where fluid vitreous passes through a peripheral retinal tear, peeling the sensory retina away from the underlying retinal pigment epithelium (RPE). Cut off from its blood supply, oxygen-starved photoreceptor cells undergo rapid cell death, threatening permanent blindness if the macula detaches.",
                "Our emergency retina service offers same-day surgical reattachment. Utilizing 25-gauge or 27-gauge sutureless vitrectomy, we clear vitreous traction surrounding tears, drain subretinal fluid, and apply green laser photocoagulation to seal tear margins. An intraocular expanding gas bubble (C3F8/SF6) is injected to hold the reattached retina flat during healing."
            ]
        },
        procedureSteps: [
            {
                title: "Emergency Dilated Funduscopy & 360-Degree Tear Mapping",
                description: "Mapping all peripheral retinal tears using indirect ophthalmoscopy and scleral depression."
            },
            {
                title: "Retrobulbar Anesthetic Block Administration",
                description: "Achieving deep ocular anesthesia and complete eye immobility with monitored intravenous sedation."
            },
            {
                title: "Sutureless Micro-Incision Vitrectomy (MIVS)",
                description: "Removing vitreous gel traction surrounding retinal tears using a high-speed micro-cutter."
            },
            {
                title: "Subretinal Fluid Aspiration & Retinal Flattening",
                description: "Draining subretinal fluid through the primary tear, allowing the neurosensory retina to settle flat onto the RPE."
            },
            {
                title: "PASCAL Patterned Laser Photocoagulation",
                description: "Delivering arrays of green laser burns surrounding retinal tears to form permanent chorioretinal scars."
            },
            {
                title: "Intraocular Gas (C3F8 / SF6) Tamponade Injection",
                description: "Instilling an expanding gas bubble to hold the reattached retina stable while instructions for head positioning are provided."
            }
        ],
        technologies: [
            {
                name: "PASCAL Patterned Scan Green Retina Laser",
                type: "Laser Photocoagulation",
                isLatestTech: true,
                duration: "Sub-Second Bursts",
                safetyProfile: "Precision Targeted Energy",
                description: "Delivers rapid pattern arrays of laser burns around retinal tears to create a firm sealing scar without collateral thermal damage.",
                tags: ["PASCAL", "Pattern Laser", "Retinal Seal"]
            },
            {
                name: "C3F8 / SF6 Intraocular Gas Tamponade",
                type: "Surgical Reattachment Medium",
                isLatestTech: false,
                duration: "2-6 Weeks In Eye",
                safetyProfile: "Global Standard of Care",
                description: "Expanding intraocular gas that floats against the upper retina, applying gentle pressure to keep tears dry while laser seals mature.",
                tags: ["Gas Tamponade", "C3F8", "SF6"]
            },
            {
                name: "Constellation Vision System 10,000 CPM",
                type: "Vitreoretinal Surgical System",
                isLatestTech: true,
                duration: "45-90 Minutes",
                safetyProfile: "Ultra-High Precision",
                description: "Dual-pneumatic vitrectomy handpiece providing fast traction-free vitreous removal near mobile detached retinal tissue.",
                tags: ["Constellation", "Vitrectomy"]
            }
        ],
        machineHighlight: {
            title: "RETINAL SURGICAL PLATFORM",
            description: "Surgeries combine the **Alcon Constellation 10k Vitrectomy Console** with the **Topcon PASCAL Synthesis Patterned Laser**."
        },
        quickFacts: [
            { label: "Anatomical Reattachment", value: "Primary surgical reattachment success rate >95% in a single procedure." },
            { label: "Emergency Window", value: "Operating before macula detachment (macula-on) preserves 20/20 visual potential." }
        ],
        faqs: [
            {
                question: "What are the early warning signs of retinal detachment?",
                answer: "Sudden appearance of bright light flashes (photopsia), a sudden shower of dark floaters, or a dark curtain shadow advancing across your field of vision."
            },
            {
                question: "Is retinal detachment surgery an emergency?",
                answer: "Yes. Immediate surgical repair is required, especially if the central macula is still attached, to preserve sharp central visual acuity."
            },
            {
                question: "Why is specific head positioning required after surgery?",
                answer: "If an intraocular gas bubble is injected, positioning your head (e.g., face-down) ensures the buoyant bubble floats directly against the retinal tear to keep it dry while it heals."
            },
            {
                question: "Can I fly on an airplane with a gas bubble in my eye?",
                answer: "NO. You must NEVER fly in an airplane or travel to high altitudes while a gas bubble remains in your eye, as atmospheric pressure drops cause the gas to expand dangerously, inducing severe glaucoma."
            },
            {
                question: "How long does the gas bubble take to dissolve?",
                answer: "SF6 gas dissolves in approximately 2 to 3 weeks, whereas C3F8 gas lasts 6 to 8 weeks. Your eye naturally fills the space with clear aqueous fluid."
            }
        ]
    },

    "macular-degeneration": {
        id: "macular-degeneration",
        name: "Age-Related Macular Degeneration (AMD)",
        category: "Retinal Vascular & Macular Disorders",
        view: "back",
        tagline: "Targeted Anti-VEGF biological micro-injections and high-resolution Spectralis OCT tracking.",
        hotspot: { x: 52, y: 50 },
        zoomInset: {
            structure: "Fovea Centralis & Choroid",
            procedure: "Targeted Anti-VEGF intravitreal micro-injections to seal leaking choroidal neovascularization (CNV) membranes."
        },
        detailsCard: {
            duration: "5-10 Mins",
            recovery: "Immediate",
            anesthesia: "Topical Drop Anesthesia",
            successRate: "96.8%",
            hospitalStay: "Outpatient Clinic Visit"
        },
        treatment: {
            heading: "Targeted Anti-VEGF Molecular Therapy for Wet & Dry AMD",
            paragraphs: [
                "Age-Related Macular Degeneration (AMD) affects the macula—the tiny central region of the retina responsible for sharp, straight-ahead vision required for reading and driving. Dry AMD involves accumulation of extracellular Drusen deposits and slow geographic atrophy. Wet (Neovascular) AMD occurs when abnormal, fragile blood vessels sprout underneath the macula, leaking fluid and blood.",
                "Untreated Wet AMD causes rapid central macular scarring and irreversible blind spots. Our retina sub-specialists utilize high-density Optical Coherence Tomography (OCT) to detect subretinal fluid, administering targeted Anti-VEGF micro-injections (Eylea / Vabysmo). These biological agents neutralize vascular growth factors, drying up macular leakage and preserving vision."
            ]
        },
        procedureSteps: [
            {
                title: "SPECTRALIS High-Resolution OCT Layer Mapping",
                description: "Capturing 85,000 A-scans per second to quantify subretinal fluid and central macular thickness."
            },
            {
                title: "Topical Drop Anesthesia & Eyelid Speculum Placement",
                description: "Numbing the eye surface completely and placing a sterile gentle speculum to prevent blinking."
            },
            {
                title: "Targeted Disinfection with 5% Povidone-Iodine",
                description: "Applying povidone-iodine wash to the conjunctival sac to maintain sterility."
            },
            {
                title: "Pars Plana Anti-VEGF Micro-Injection",
                description: "Delivering a micro-dose of Eylea (Aflibercept) or Vabysmo (Faricimab) using a ultra-thin 30-gauge needle."
            },
            {
                title: "Speculum Removal & Surface Flush",
                description: "Rinsing the ocular surface with balanced saline solution and confirming light perception."
            },
            {
                title: "Serial OCT Macular Tracking",
                description: "Scheduling follow-up fluid checks at 4 to 8 week intervals under a Treat-and-Extend protocol."
            }
        ],
        technologies: [
            {
                name: "Anti-VEGF Agents (Eylea / Vabysmo)",
                type: "Biologic Molecular Injections",
                isLatestTech: true,
                duration: "2-Minute In-Office Injection",
                safetyProfile: "FDA Approved Targeted Action",
                description: "Inhibits Vascular Endothelial Growth Factor (VEGF-A and Angiopoietin-2) to stop abnormal blood vessel growth and fluid leakage beneath the macula.",
                tags: ["Anti-VEGF", "Eylea", "Vabysmo", "Biologic"]
            },
            {
                name: "Heidelberg SPECTRALIS Optical Coherence Tomography",
                type: "High-Resolution Diagnostic OCT",
                isLatestTech: true,
                duration: "Under 10 Seconds",
                safetyProfile: "100% Non-Invasive Light Scan",
                description: "Spectral-domain OCT platform providing sub-micron cross-sectional imaging of retinal micro-layers and choroidal neovascular membranes.",
                tags: ["OCT", "Spectralis", "Macular Tracking"]
            },
            {
                name: "Syfovre (Pegcetacoplan) Dry AMD Therapy",
                type: "Complement Factor C3 Inhibitor",
                isLatestTech: true,
                duration: "In-Office Injection",
                safetyProfile: "First Approved Dry AMD Drug",
                description: "Targeted complement inhibitor designed to slow the progression of geographic atrophy in advanced Dry AMD.",
                tags: ["Syfovre", "Dry AMD", "Geographic Atrophy"]
            }
        ],
        machineHighlight: {
            title: "MACULAR DIAGNOSTIC & THERAPEUTIC PLATFORM",
            description: "Macular tracking relies on the **Heidelberg SPECTRALIS Spectral-Domain OCT System**."
        },
        quickFacts: [
            { label: "Vision Preservation", value: "Anti-VEGF injections halt central visual decline in >95% of wet AMD cases." },
            { label: "Extended Dosing", value: "Next-generation agents (Vabysmo) extend injection intervals up to 4 months." }
        ],
        faqs: [
            {
                question: "Do Anti-VEGF intravitreal injections hurt?",
                answer: "No. Numbing drops and localized anesthetic ensure you feel only a brief pressure sensation during the 2-second micro-injection."
            },
            {
                question: "What is the difference between Dry and Wet AMD?",
                answer: "Dry AMD progresses slowly as Drusen deposits accumulate. Wet AMD involves abnormal leaking blood vessels under the macula, causing rapid distortion and central visual loss."
            },
            {
                question: "How many Anti-VEGF injections will I need?",
                answer: "Wet AMD requires ongoing management. Most patients receive monthly loading doses, after which treatment intervals are extended based on OCT fluid checks."
            },
            {
                question: "Can AMD cause total black-out blindness?",
                answer: "AMD affects central sharp vision needed for reading and recognizing faces, but peripheral vision remains intact, so total darkness does not occur."
            },
            {
                question: "Are there treatments for Dry AMD geographic atrophy?",
                answer: "Yes! Breakthrough complement-inhibitor injections (Syfovre) are now available to slow the expansion of geographic atrophy lesions in Dry AMD."
            }
        ]
    },

    "diabetic-retinopathy": {
        id: "diabetic-retinopathy",
        name: "Diabetic Retinopathy & DME",
        category: "Diabetic Eye Disease & Retinal Vascular Surgery",
        view: "back",
        tagline: "Dye-free OCT Angiography tracking, Anti-VEGF micro-dosing, and Panretinal Photocoagulation (PRP).",
        hotspot: { x: 65, y: 40 },
        zoomInset: {
            structure: "Micro-Vascular Arcades & Macula",
            procedure: "Panretinal Laser Photocoagulation (PRP) of ischemic retina paired with Anti-VEGF resolution of Diabetic Macular Edema."
        },
        detailsCard: {
            duration: "15-30 Mins",
            recovery: "24-48 Hours",
            anesthesia: "Topical Drop Anesthesia",
            successRate: "96.2%",
            hospitalStay: "Outpatient Clinic Visit"
        },
        treatment: {
            heading: "Comprehensive Diabetic Retinopathy & Macular Edema Control",
            paragraphs: [
                "Diabetic Retinopathy is a micro-vascular complication of diabetes where prolonged hyperglycemia damages capillaries feeding the retina. In non-proliferative stages (NPDR), micro-aneurysms leak fluid, creating Diabetic Macular Edema (DME). In advanced proliferative stages (PDR), retinal ischemia triggers abnormal, fragile vessel growth that bleeds or contracts into tractional retinal detachments.",
                "Our retina service provides full-spectrum diabetic vision care. We utilize non-invasive dye-free OCT Angiography (OCT-A) to map capillary non-perfusion zones. Leakage is controlled using targeted Anti-VEGF injections, while Panretinal Patterned Laser Photocoagulation (PRP) regression prevents devastating vitreous hemorrhages."
            ]
        },
        procedureSteps: [
            {
                title: "Dye-Free OCT Angiography Capillary Mapping",
                description: "Visualizing 3D micro-vascular networks to detect foveal avascular zone expansion and neovascularization."
            },
            {
                title: "Topical Drop Anesthesia & Laser Contact Lens Placement",
                description: "Numbing the eye and applying a wide-field laser lens to visualize peripheral ischemic retina."
            },
            {
                title: "PASCAL Patterned Panretinal Laser (PRP Execution)",
                description: "Delivering automated short-duration pattern laser spots to ischemic peripheral retina, suppressing VEGF production."
            },
            {
                title: "Targeted Anti-VEGF Intravitreal Micro-Injection",
                description: "Injecting anti-VEGF agents to rapidly resolve central Diabetic Macular Edema (DME)."
            },
            {
                title: "Targeted Focal Macular Laser (If Indicated)",
                description: "Applying micro-pulse sub-threshold laser to micro-aneurysms leaking outside the central foveal zone."
            },
            {
                title: "Glycemic Co-Management & Serial OCT Tracking",
                description: "Coordinating with endocrinologists to optimize HbA1c control while scheduling 8-week OCT follow-ups."
            }
        ],
        technologies: [
            {
                name: "OCT Angiography (OCT-A) Dye-Free Imaging",
                type: "Diagnostic Micro-Vascular Imaging",
                isLatestTech: true,
                duration: "30 Seconds Scan",
                safetyProfile: "No Intravenous Dye Needed",
                description: "Captures motion contrast from flowing red blood cells to map capillary perfusion without dye injections.",
                tags: ["OCT-A", "Dye-Free", "Angiography"]
            },
            {
                name: "PASCAL Patterned Panretinal Photocoagulation (PRP)",
                type: "Retinal Laser System",
                isLatestTech: true,
                duration: "10-15 Minutes",
                safetyProfile: "Outpatient Retinal Laser",
                description: "Delivers pattern laser bursts to treat ischemic retina, reducing neovascularization signals.",
                tags: ["PRP", "PASCAL", "Pattern Laser"]
            },
            {
                name: "Sub-Threshold MicroPulse Laser Therapy",
                type: "Tissue-Sparing Laser",
                isLatestTech: true,
                duration: "10 Minutes",
                safetyProfile: "Zero Thermal Scarring",
                description: "Delivers picosecond micro-pulses that stimulate RPE cellular repair without burning retinal tissue.",
                tags: ["MicroPulse", "Sub-Threshold", "No Scarring"]
            }
        ],
        machineHighlight: {
            title: "DIABETIC RETINA DIAGNOSTIC PLATFORM",
            description: "Capillary profiling uses **ZEISS CIRRUS 6000 AngioPlex OCT-Angiography**."
        },
        quickFacts: [
            { label: "Blindness Reduction", value: "Timely PRP and Anti-VEGF therapy reduces severe visual loss risk by >90%." },
            { label: "Non-Invasive Diagnostic", value: "OCT-Angiography completely replaces traditional intravenous fluorescein dye injections." }
        ],
        faqs: [
            {
                question: "How often should diabetic patients have their eyes examined?",
                answer: "Diabetic individuals must receive a comprehensive dilated eye exam and high-resolution OCT scan at least once per year, or more frequently if retinopathy is detected."
            },
            {
                question: "Can diabetic vision loss be reversed?",
                answer: "Diabetic Macular Edema (DME) fluid can be dried up with Anti-VEGF injections, restoring lost central vision if treated before long-term photoreceptor damage occurs."
            },
            {
                question: "Does Panretinal Laser Photocoagulation (PRP) hurt?",
                answer: "Topical anesthetic drops minimize discomfort. Pattern lasers (PASCAL) deliver ultra-short laser bursts, making treatment significantly more comfortable than older lasers."
            },
            {
                question: "Why is HbA1c control important alongside eye treatments?",
                answer: "Systemic blood sugar stability (HbA1c < 7.0%) prevents ongoing micro-capillary damage, ensuring long-term success of eye laser and injection treatments."
            },
            {
                question: "What is Diabetic Macular Edema (DME)?",
                answer: "DME occurs when damaged retinal blood vessels leak fluid into the macula, causing localized swelling that distorts sharp central vision."
            }
        ]
    },

    "retinitis-pigmentosa": {
        id: "retinitis-pigmentosa",
        name: "Retinitis Pigmentosa",
        category: "Inherited Retinal Diseases & Visual Rehabilitation",
        view: "back",
        tagline: "Targeted retinal gene panel sequencing, low-vision optics, and cellular preservation.",
        hotspot: { x: 22, y: 30 },
        zoomInset: {
            structure: "Peripheral Retinal Pigment Epithelium",
            procedure: "Targeted genetic mutation sequencing (RPE65), subretinal gene replacement evaluation, and electronic low-vision aids."
        },
        detailsCard: {
            duration: "30-45 Mins",
            recovery: "Non-Invasive Diagnostics",
            anesthesia: "None Required",
            successRate: "Genetic Staging",
            hospitalStay: "Outpatient Clinic Visit"
        },
        treatment: {
            heading: "Genetic Profiling & Advanced Low-Vision Rehabilitation",
            paragraphs: [
                "Retinitis Pigmentosa (RP) encompasses a group of rare, inherited retinal dystrophies characterized by progressive breakdown of light-sensitive photoreceptor cells. Initial degeneration attacks rod photoreceptors in the peripheral retina, causing nyctalopia (night blindness) and progressive peripheral tunnel vision, before eventually involving cone cells.",
                "While RP was historically untreatable, genetic breakthroughs now offer hope. Our specialized inherited retinal disease clinic performs comprehensive targeted retinal gene sequencing panels to identify underlying causative mutations (such as RPE65). Patients harboring confirmed biallelic RPE65 mutations are evaluated for Luxturna gene replacement therapy, while others benefit from custom low-vision electronic optics."
            ]
        },
        procedureSteps: [
            {
                title: "Electroretinography (Full-Field ERG) Functional Staging",
                description: "Quantifying electrical responses from rod and cone photoreceptor populations under dark and light adapted states."
            },
            {
                title: "Goldmann Visual Field Kinetic Perimetry",
                description: "Mapping peripheral visual field boundaries and quantifying remaining central visual islands."
            },
            {
                title: "Saliva / Blood Sample Retinal Gene Sequencing",
                description: "Extracting genomic DNA to run a comprehensive 300+ inherited retinal disease gene panel."
            },
            {
                title: "Genetic Counseling & Pathogenicity Confirmation",
                description: "Reviewing identified variant pathogenicity (e.g., RPE65, USH2A, RPGR) with certified genetic counselors."
            },
            {
                title: "Gene Therapy Screening (Luxturna Evaluation)",
                description: "Evaluating subretinal vector delivery suitability for confirmed biallelic RPE65 gene variants."
            },
            {
                title: "Custom Low-Vision Electronic Optics Fitting",
                description: "Dispensing head-mounted digital magnification systems and high-contrast wearable optics."
            }
        ],
        technologies: [
            {
                name: "Targeted IRD Gene Panel Sequencing",
                type: "Molecular Genetic Diagnostics",
                isLatestTech: true,
                duration: "Single Blood/Saliva Sample",
                safetyProfile: "Non-Invasive Diagnostic",
                description: "Next-generation sequencing panel identifying exact genetic mutations across 300+ retinal disease genes.",
                tags: ["Gene Sequencing", "RPE65", "Genetics"]
            },
            {
                name: "Diagnosys Espion Full-Field ERG System",
                type: "Electrophysiological Testing",
                isLatestTech: true,
                duration: "30-45 Minutes",
                safetyProfile: "Non-Invasive Testing",
                description: "Measures electrical potentials generated by the retina in response to light flashes, providing quantitative rod/cone tracking.",
                tags: ["ERG", "Electrophysiology", "Rod/Cone"]
            },
            {
                name: "eSight / IrisVision Wearable Electronic Aids",
                type: "Low-Vision Rehabilitation",
                isLatestTech: true,
                duration: "Fitting Session",
                safetyProfile: "Non-Invasive Optics",
                description: "Head-mounted digital camera displays that capture real-time video, re-projecting high-contrast images onto remaining functional visual fields.",
                tags: ["Low-Vision", "Wearable Optics", "eSight"]
            }
        ],
        machineHighlight: {
            title: "ELECTROPHYSIOLOGY PLATFORM",
            description: "Photoreceptor functional testing utilizes the **Diagnosys Espion Electro-Diagnostic System**."
        },
        quickFacts: [
            { label: "Genetic Identification", value: "Over 60% of RP patients now successfully identify their exact causative gene mutation." },
            { label: "Gene Therapy Availability", value: "FDA-approved Luxturna subretinal gene replacement available for confirmed RPE65 variants." }
        ],
        faqs: [
            {
                question: "Is there an approved treatment for Retinitis Pigmentosa?",
                answer: "Yes. For patients with confirmed biallelic RPE65 gene mutations, FDA-approved gene replacement therapy (Luxturna) delivers functional genes directly under the retina."
            },
            {
                question: "How is Retinitis Pigmentosa inherited?",
                answer: "RP can be inherited in autosomal dominant, autosomal recessive, or X-linked patterns depending on the family's underlying genetic profile."
            },
            {
                question: "What are the first signs of Retinitis Pigmentosa?",
                answer: "Inability to see or adapt in dim lighting or at night (nyctalopia) followed by progressive loss of peripheral visual field (tunnel vision)."
            },
            {
                question: "Why is genetic testing important for RP patients?",
                answer: "Genetic testing identifies your exact gene mutation, determining eligibility for FDA-approved gene therapies and active clinical trial pipelines."
            },
            {
                question: "How do low-vision wearable glasses help?",
                answer: "Digital low-vision devices magnify, brighten, and re-map live video images onto the central functional retina, allowing patients to read and recognize faces."
            }
        ]
    },

    "optic-neuritis": {
        id: "optic-neuritis",
        name: "Optic Neuritis",
        category: "Neuro-Ophthalmology & Demyelinating Disorders",
        view: "back",
        tagline: "Intravenous corticosteroid pulse therapy, VEP electro-diagnostics, and high-field orbital MRI.",
        hotspot: { x: 35, y: 48 },
        zoomInset: {
            structure: "Optic Nerve Head & Nerve Sheath",
            procedure: "High-dose IV methylprednisolone pulse therapy, visual evoked potential tracking, and orbital MRI screening."
        },
        detailsCard: {
            duration: "30-60 Mins",
            recovery: "2-4 Weeks",
            anesthesia: "None Required",
            successRate: "95.8%",
            hospitalStay: "Daycare Infusion Suite"
        },
        treatment: {
            heading: "Urgent Neuro-Ophthalmic Corticosteroid Pulse Therapy",
            paragraphs: [
                "Optic Neuritis is an inflammatory demyelinating condition affecting the optic nerve, responsible for transmitting visual signals from the retina to the visual cortex. Frequently associated with Multiple Sclerosis (MS), Neuromyelitis Optica (NMO), or MOG-antibody disorders, optic neuritis presents with painful eye movements, rapid visual loss, and reduced color saturation.",
                "Our neuro-ophthalmology team provides rapid diagnostic workups. Utilizing Visual Evoked Potential (VEP) testing and 3T orbital MRI imaging with gadolinium contrast, we assess nerve swelling and demyelination. High-dose Intravenous Methylprednisolone pulse therapy is initiated immediately to accelerate visual recovery and reduce retrobulbar pain."
            ]
        },
        procedureSteps: [
            {
                title: "Neuro-Ophthalmic Pupillary & Color Desaturation Exam",
                description: "Checking for Relative Afferent Pupillary Defect (RAPD) and red color desaturation."
            },
            {
                title: "Visual Evoked Potential (VEP) Electrophysiological Testing",
                description: "Measuring latency delays (P100 peak) of electrical signal transmission from optic nerve to brain."
            },
            {
                title: "3T High-Field Brain & Orbital MRI Imaging",
                description: "Scanning for optic nerve sheath hyper-intensity and cerebral demyelinating white matter lesions."
            },
            {
                title: "Serum NMO-IgG (Aquaporin-4) & MOG Antibody Serology",
                description: "Drawing blood markers to differentiate classical MS-associated neuritis from NMO spectrum disorders."
            },
            {
                title: "Intravenous High-Dose Methylprednisolone Pulse Infusion",
                description: "Administering 1000mg/day IV methylprednisolone pulse therapy for 3 consecutive days in our infusion suite."
            },
            {
                title: "Oral Steroid Taper & Serial Ganglion Cell Layer OCT Tracking",
                description: "Transitioning to oral prednisone taper while tracking retinal ganglion cell layer thickness on OCT."
            }
        ],
        technologies: [
            {
                name: "Visual Evoked Potential (VEP) Testing",
                type: "Electrophysiological Assessment",
                isLatestTech: false,
                duration: "20 Minutes",
                safetyProfile: "Painless Diagnostic",
                description: "Measures conduction speed and amplitude of optic nerve impulses travelling to the visual cortex.",
                tags: ["VEP", "Electrophysiology", "Optic Nerve Speed"]
            },
            {
                name: "3T High-Field Brain & Orbit MRI",
                type: "Neuro-Imaging",
                isLatestTech: true,
                duration: "30 Minutes",
                safetyProfile: "Non-Invasive Magnetic Scan",
                description: "High-resolution MRI with fat suppression and contrast enhancement visualizing optic nerve sheath inflammation.",
                tags: ["MRI 3T", "Neuro-Imaging", "Optic Nerve"]
            },
            {
                name: "OCT Ganglion Cell Analysis (GCA)",
                type: "Diagnostic Retinal Scan",
                isLatestTech: true,
                duration: "10 Seconds",
                safetyProfile: "Non-Invasive",
                description: "Quantifies axonal loss within the macular ganglion cell complex to predict permanent visual outcomes.",
                tags: ["OCT GCA", "Ganglion Cells", "Axonal Loss"]
            }
        ],
        machineHighlight: {
            title: "NEURO-DIAGNOSTIC PLATFORM",
            description: "Optic nerve conduction latency is profiled using the **Diagnosys Celeris VEP System**."
        },
        quickFacts: [
            { label: "Visual Recovery", value: "Over 90% of optic neuritis patients regain 20/20 or near-normal vision following IV steroids." },
            { label: "Pain Relief", value: "Retrobulbar pain on eye movement resolves rapidly within 24-48 hours of IV steroid initiation." }
        ],
        faqs: [
            {
                question: "Will my vision return after optic neuritis?",
                answer: "Yes! The vast majority of patients experience significant visual recovery over 2 to 6 weeks following intravenous steroid pulse therapy."
            },
            {
                question: "Is optic neuritis always linked to Multiple Sclerosis (MS)?",
                answer: "Not always. While optic neuritis can be an initial sign of MS, it can also occur as an isolated event, or be linked to NMO, MOG-antibody disease, or viral infections."
            },
            {
                question: "Why are eye movements painful during optic neuritis?",
                answer: "The extraocular rectus muscles share a common fibrous sheath with the inflamed optic nerve at the orbital apex, causing traction pain during eye movement."
            },
            {
                question: "Why is high-dose IV steroid therapy preferred over oral steroids?",
                answer: "Clinical trials demonstrated that high-dose IV steroids accelerate visual recovery safely, whereas low-dose oral steroids alone increased recurrence rates."
            },
            {
                question: "What is an RAPD pupil test?",
                answer: "A Relative Afferent Pupillary Defect (RAPD) test uses a swinging flashlight to detect reduced light perception signals in an inflamed optic nerve."
            }
        ]
    },

    "retinoblastoma": {
        id: "retinoblastoma",
        name: "Retinoblastoma",
        category: "Pediatric Ocular Oncology & Retinal Tumors",
        view: "back",
        tagline: "Organ-preserving Intra-Arterial Chemotherapy (IAC), cryotherapy, and RetCam imaging.",
        hotspot: { x: 70, y: 65 },
        zoomInset: {
            structure: "Pediatric Retinal Neural Mass",
            procedure: "Targeted ophthalmic artery micro-catheter chemotherapy infusion (IAC) and wide-angle RetCam documentation."
        },
        detailsCard: {
            duration: "45-60 Mins",
            recovery: "24-48 Hours",
            anesthesia: "Pediatric General Anesthesia",
            successRate: "98.9%",
            hospitalStay: "Daycare Surgical Unit"
        },
        treatment: {
            heading: "Pediatric Intra-Arterial Chemotherapy (IAC) & Globe Preservation",
            paragraphs: [
                "Retinoblastoma is the most common primary intraocular malignancy of childhood, originating from immature retinal neural cells due to mutations in the RB1 tumor suppressor gene. It typically presents in infants and young children with leukocoria (a white pupillary glow seen in flash photography) or new-onset strabismus.",
                "Historical treatments relied heavily on enucleation (surgical eye removal). Our pediatric ocular oncology team prioritizes life and globe preservation. We perform Intra-Arterial Chemotherapy (IAC), threading a micro-catheter from the femoral artery directly into the ophthalmic artery to deliver concentrated chemotherapy (Melphalan) directly to the eye tumor while minimizing systemic toxicity."
            ]
        },
        procedureSteps: [
            {
                title: "Wide-Field RetCam Examination Under Anesthesia (EUA)",
                description: "Capturing 130-degree digital color images and B-scan ultrasound maps of pediatric tumor masses."
            },
            {
                title: "Pediatric General Anesthesia & Femoral Arterial Access",
                description: "Securing pediatric anesthesia and placing a micro-sheath in the femoral artery under fluoroscopy."
            },
            {
                title: "Ophthalmic Artery Micro-Catheter Navigation",
                description: "Navigating a micro-catheter under interventional radiologic guidance to the orifice of the ophthalmic artery."
            },
            {
                title: "Targeted Melphalan Chemotherapy Pulsed Infusion",
                description: "Infusing concentrated chemotherapy directly into the ocular circulation over 30 minutes."
            },
            {
                title: "Transpupillary Thermotherapy (TTT) / Cryotherapy",
                description: "Applying direct laser heat or cryogenic freeze probes to consolidate peripheral tumor margins."
            },
            {
                title: "Femoral Hemostasis & RetCam Tumor Regression Tracking",
                description: "Removing arterial sheath, applying pressure dressing, and scheduling 3-week RetCam tumor checks."
            }
        ],
        technologies: [
            {
                name: "Intra-Arterial Chemotherapy (IAC / Superselective)",
                type: "Targeted Ocular Oncology",
                isLatestTech: true,
                duration: "Micro-Catheter Procedure",
                safetyProfile: "Globe-Saving High Precision",
                description: "Delivers chemotherapeutic agents directly into the ophthalmic artery, achieving 10x higher drug concentrations in the eye.",
                tags: ["IAC", "Melphalan", "Globe Preservation"]
            },
            {
                name: "RetCam 3 Wide-Field Digital Pediatric Imager",
                type: "Pediatric Diagnostic Imaging",
                isLatestTech: true,
                duration: "Under Anesthesia Scan",
                safetyProfile: "Comprehensive Documentation",
                description: "130-degree high-resolution digital imaging lens designed specifically for mapping pediatric retinal tumors.",
                tags: ["RetCam", "Pediatric Imaging", "Tumor Mapping"]
            },
            {
                name: "Transpupillary Thermotherapy (TTT Laser)",
                type: "Thermal Tumor Ablation",
                isLatestTech: false,
                duration: "10 Minutes",
                safetyProfile: "Targeted Thermal Energy",
                description: "Infrared laser applied directly through the pupil to heat and destroy micro-tumor cells and feeder blood vessels.",
                tags: ["TTT Laser", "Thermal Ablation"]
            }
        ],
        machineHighlight: {
            title: "PEDIATRIC ONCOLOGY PLATFORM",
            description: "Tumor documentation is performed using the **Natus RetCam 3 Wide-Field Digital Imaging System**."
        },
        quickFacts: [
            { label: "Globe Preservation", value: "Intra-Arterial Chemotherapy saves the natural eye in >90% of newly diagnosed cases." },
            { label: "Survival Rate", value: "Overall survival rates exceed 99% with early pediatric ocular oncology intervention." }
        ],
        faqs: [
            {
                question: "What is leukocoria and why is it important?",
                answer: "Leukocoria is an abnormal white reflection seen in the pupil (often visible in flash photography as a 'cat's eye reflex'). It is the primary early warning sign of retinoblastoma."
            },
            {
                question: "How does Intra-Arterial Chemotherapy (IAC) save the eye?",
                answer: "IAC delivers chemotherapy through a micro-catheter placed directly into the eye's primary artery, concentrating drug power inside the tumor while sparing the rest of the body from systemic toxicity."
            },
            {
                question: "Is retinoblastoma hereditary?",
                answer: "About 40% of cases are germline/hereditary due to inherited RB1 gene mutations, often affecting both eyes. Genetic counseling is vital for affected families."
            },
            {
                question: "Will my child lose their eye?",
                answer: "With modern superselective IAC, cryotherapy, and laser thermotherapy, surgical removal of the eye (enucleation) is now avoided in over 90% of cases."
            },
            {
                question: "How frequently must children undergo follow-up exams?",
                answer: "Exams Under Anesthesia (EUA) with RetCam imaging are performed every 3 to 4 weeks during active treatment, extending to every few months as tumors calcify."
            }
        ]
    }
};