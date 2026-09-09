/**
 * data/treatmentIndex.js
 * ------------------------------------------------------------------------
 * Lightweight index of every treatment: just id/name/category.
 *
 * Deliberately NOT derived from diseaseContent.js at runtime. If it did
 * `Object.values(diseaseData)`, every file that imports this index would
 * still pull in the full diseaseData module (all procedure steps, tech
 * descriptions, FAQ prose for 19 conditions) into its bundle, because
 * bundlers can't tree-shake an object literal that gets iterated with
 * Object.values(). Keeping this as its own static array means Navbar,
 * the homepage dropdowns, etc. only ship the few KB they actually need,
 * instead of the entire treatment content database.
 *
 * If you add/remove/rename a condition in diseaseContent.js, mirror the
 * change here too (id, name, category only).
 * ------------------------------------------------------------------------
 */
export const treatmentIndex = [
    { id: "conjunctivitis", name: "Conjunctivitis (Pink Eye)", category: "Anterior Segment / Cornea & External Disease" },
    { id: "dry-eye-syndrome", name: "Dry Eye Syndrome & MGD", category: "Cornea & Ocular Surface Therapeutics" },
    { id: "stye-chalazion", name: "Stye & Chalazion", category: "Oculoplastics & Eyelid Disorders" },
    { id: "pterygium", name: "Pterygium (Surfer's Eye)", category: "Cornea & Ocular Surface Reconstruction" },
    { id: "corneal-ulcer", name: "Corneal Ulcer & Microbial Keratitis", category: "Cornea & Ocular Surface Emergency" },
    { id: "strabismus", name: "Strabismus (Crossed Eyes)", category: "Pediatric Ophthalmology & Adult Strabismus" },
    { id: "blepharitis", name: "Blepharitis", category: "Anterior Segment & Eyelid Margin Disease" },
    { id: "lasik", name: "LASIK & Refractive Surgery", category: "Refractive Surgery & Vision Correction" },
    { id: "cataract", name: "Cataract Surgery & IOL Implantation", category: "Anterior Segment & Lens Implant Surgery" },
    { id: "glaucoma", name: "Glaucoma Management & MIGS", category: "Glaucoma & Intraocular Pressure Control" },
    { id: "vitreous-hemorrhage", name: "Vitreous Hemorrhage", category: "Vitreoretinal Surgery & Trauma Care" },
    { id: "uveitis", name: "Uveitis & Ocular Inflammation", category: "Uveitis & Ocular Immunology" },
    { id: "keratoconus", name: "Keratoconus", category: "Corneal Ectasia & Reconstructive Optics" },
    { id: "retinal-detachment", name: "Retinal Detachment", category: "Vitreoretinal Emergency & Retinal Surgery" },
    { id: "macular-degeneration", name: "Age-Related Macular Degeneration (AMD)", category: "Retinal Vascular & Macular Disorders" },
    { id: "diabetic-retinopathy", name: "Diabetic Retinopathy & DME", category: "Diabetic Eye Disease & Retinal Vascular Surgery" },
    { id: "retinitis-pigmentosa", name: "Retinitis Pigmentosa", category: "Inherited Retinal Diseases & Visual Rehabilitation" },
    { id: "optic-neuritis", name: "Optic Neuritis", category: "Neuro-Ophthalmology & Demyelinating Disorders" },
    { id: "retinoblastoma", name: "Retinoblastoma", category: "Pediatric Ocular Oncology & Retinal Tumors" },
];