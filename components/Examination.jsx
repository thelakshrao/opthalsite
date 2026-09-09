'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { diseaseData } from '@/data/diseaseContent';

const EMAILJS_SERVICE_ID = 'service_nx91wke';
const EMAILJS_TEMPLATE_ID = 'template_loos9xj';
const EMAILJS_PUBLIC_KEY = 'k3ORwrN11DA_MndsG';

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

function useEyeDots(width = 360, height = 180, step = 10) {
    return useMemo(() => {
        const dots = [];
        const cx = width / 2;
        const cy = height / 2;

        const rx = width * 0.45;
        const ry = height * 0.42;

        for (let x = 0; x <= width; x += step) {
            for (let y = 0; y <= height; y += step) {
                const dx = (x - cx) / rx;
                const dy = (y - cy) / ry;
                const distSq = dx * dx + dy * dy;

                if (distSq <= 1) {
                    const distFromCenter = Math.hypot(x - cx, y - cy);
                    const isIris = distFromCenter < height * 0.18;
                    dots.push({ x, y, iris: isIris });
                }
            }
        }
        return dots;
    }, [width, height, step]);
}

function EyeDotPattern({ className = '', width = 360, height = 180 }) {
    const dots = useEyeDots(width, height);

    return (
        <div
            className={`pointer-events-none select-none ${className}`}
            style={{
                width: width,
                height: height,
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
            }}
            aria-hidden="true"
        >
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                {dots.map((d, i) => {
                    const baseRadius = d.iris ? 2.5 : 1.5;
                    const baseOpacity = d.iris ? 0.85 : 0.45;
                    const animDelay = (i % 12) * 0.15;

                    return (
                        <motion.circle
                            key={i}
                            cx={d.x}
                            cy={d.y}
                            r={baseRadius}
                            fill={d.iris ? '#000000' : '#525252'}
                            initial={{ opacity: baseOpacity, scale: 1 }}
                            animate={{
                                opacity: [baseOpacity, baseOpacity * 0.3, baseOpacity],
                                scale: [1, 1.25, 1],
                            }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: animDelay,
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}

export default function Examination() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [countryCode, setCountryCode] = useState("+91");
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        treatment: '',
        message: '',
    });

    const selectedCountry = useMemo(() => {
        return COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];
    }, [countryCode]);

    const handlePhoneChange = (e) => {
        const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, selectedCountry.maxLength);
        setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const fullPhoneNumber = `${countryCode} ${formData.phone}`;

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.fullName,
                    phone: fullPhoneNumber,
                    treatment: formData.treatment || 'General Inquiry',
                    message: formData.message || 'No message provided',
                },
                EMAILJS_PUBLIC_KEY
            );
            setFormSubmitted(true);
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Failed to submit consultation request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="consultation-patient"
            className="relative w-full max-w-full pt-16 sm:pt-24 pb-28 sm:pb-26 bg-[#ffffff] text-black z-20 overflow-hidden transform-gpu"
        >
            <div
                className="absolute top-0 inset-x-0 h-28 pointer-events-none bg-gradient-to-b from-transparent via-white/80 to-white z-30 flex items-center justify-center pt-2"
                aria-hidden="true"
            >
                <Image
                    src="/images/logo/eyevora2.png"
                    alt="Eyevora Logo"
                    width={160}
                    height={40}
                    className="h-6 sm:h-8 w-auto object-contain brightness-0"
                />
            </div>

            <EyeDotPattern
                className="hidden md:block absolute md:top-24 md:-left-8 z-10 opacity-80"
                width={360}
                height={180}
            />

            <EyeDotPattern
                className="hidden md:block absolute md:-bottom-4 md:-right-8 z-10 opacity-80"
                width={360}
                height={180}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-40 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-6 flex flex-col justify-center relative z-20"
                    >
                        <div className="inline-block self-start px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-mono tracking-widest uppercase mb-4 border border-neutral-200">
                            LASIK Eye Surgery
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
                            Freedom From Glasses, <br />
                            In Minutes.
                        </h2>

                        <p className="mt-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                            LASIK (Laser-Assisted In Situ Keratomileusis) reshapes the cornea using a precise, computer-guided excimer laser—correcting nearsightedness, farsightedness, and astigmatism. The procedure is quick, typically performed with numbing eye drops rather than general anesthesia, and most patients return to normal daily activities within a day or two.
                        </p>

                        <div className="relative mt-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-50">
                            <Image
                                src="/images/photos/lasik.webp"
                                alt="LASIK laser eye surgery procedure"
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                quality={75}
                                className="object-cover object-[78%_45%] scale-[1.35]"
                            />
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-black text-white">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                                Machine We Use For Surgery
                            </div>
                            <p className="text-sm mt-1.5 font-light leading-relaxed">
                                Your procedure is performed with a <strong className="font-bold">computer-guided excimer laser</strong>, with corneal flaps created by a <strong className="font-bold">femtosecond laser</strong> and reshaping mapped by a <strong className="font-bold">topography-guided system</strong>.
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                <div className="text-xs font-bold uppercase tracking-wider text-black">Quick Procedure</div>
                                <div className="text-xs text-neutral-500 mt-1 font-light">Typically completed in under 15 minutes for both eyes.</div>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                <div className="text-xs font-bold uppercase tracking-wider text-black">Fast Recovery</div>
                                <div className="text-xs text-neutral-500 mt-1 font-light">Most patients notice clearer vision within a day or two.</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        className="lg:col-span-6"
                    >
                        <div
                            id="Examination-form"
                            className="p-6 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm scroll-mt-24 sm:scroll-mt-28"
                        >

                            <div className="mb-8">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                                    Direct Clinical Intake
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mt-1">
                                    Request an Examination
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light">
                                    Schedule an in-person LASIK consultation with our ophthalmology team. No referral required for self-referrals.
                                </p>
                            </div>

                            {formSubmitted ? (
                                <div className="p-8 rounded-2xl bg-white border border-neutral-300 text-center py-12">
                                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 text-xl">
                                        ✓
                                    </div>
                                    <h4 className="text-lg font-bold text-black">Consultation Request Received</h4>
                                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
                                        Thank you, <span className="font-semibold">{formData.fullName}</span>. Our clinical coordinator will contact you at <span className="font-semibold">{countryCode} {formData.phone}</span> within one business day regarding your request for <span className="font-semibold">{formData.treatment}</span>.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setFormData({ fullName: '', phone: '', treatment: '', message: '' });
                                        }}
                                        className="mt-6 px-5 py-2 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
                                    >
                                        Submit Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Eleanor Vance"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="flex rounded-xl border border-neutral-300 bg-white overflow-hidden focus-within:border-black transition-colors">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="bg-neutral-100 text-neutral-800 text-xs px-3 py-3 border-r border-neutral-300 outline-none font-medium"
                                            >
                                                {COUNTRY_CODES.map((item) => (
                                                    <option key={item.label} value={item.code}>
                                                        {item.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                maxLength={selectedCountry.maxLength}
                                                placeholder={`${selectedCountry.maxLength} digits`}
                                                className="w-full px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Select Treatment
                                        </label>
                                        <select
                                            value={formData.treatment}
                                            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black focus:outline-none focus:border-black transition-colors"
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
                                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Any prior surgeries, current prescriptions, or specific questions..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-colors shadow-xs disabled:opacity-50"
                                    >
                                        {loading ? 'Sending Request...' : 'Request Priority Consultation'}
                                    </motion.button>

                                    <p className="text-[11px] text-neutral-500 text-center font-light mt-3">
                                        Confidential & HIPAA compliant. We do not share your medical information.
                                    </p>
                                </form>
                            )}

                        </div>

                        <div className="mt-8 flex items-center justify-center">
                            <Image
                                src="/images/logo/eyevora2.png"
                                alt="Eyevora Logo"
                                width={260}
                                height={40}
                                className="h-6 sm:h-18 w-auto object-contain brightness-0"
                            />
                        </div>
                    </motion.div>

                </div>

                <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-neutral-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="lg:col-span-6 order-2 lg:order-1"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-[16/10] sm:aspect-[16/9] w-full max-w-md mx-auto lg:mx-0 bg-neutral-50">
                                <Image
                                    src="/images/photos/cataract.webp"
                                    alt="Cataract surgery procedure"
                                    fill
                                    sizes="(max-width: 640px) 100vw, 40vw"
                                    quality={75}
                                    className="object-cover scale-[1.25]"
                                />
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-black text-white max-w-md mx-auto lg:mx-0">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                                    Machine We Use For Surgery
                                </div>
                                <p className="text-sm mt-1.5 font-light leading-relaxed">
                                    Lens removal is performed with a <strong className="font-bold">phacoemulsification system</strong>, with key steps guided by a <strong className="font-bold">femtosecond laser platform</strong> for precise, computer-planned incisions.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
                        >
                            <div className="inline-block self-start px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-mono tracking-widest uppercase mb-4 border border-neutral-200">
                                Cataract Surgery
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
                                Clear Vision. <br />
                                Without The Glasses.
                            </h2>

                            <p className="mt-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                                Cataract surgery removes the eye's clouded natural lens and replaces it with a clear, custom-calculated intraocular lens (IOL). Our surgeons use micro-incision phacoemulsification, breaking up the cataract with focused ultrasound energy through an opening small enough that most patients need no stitches at all.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-black">Stitch-Free</div>
                                    <div className="text-xs text-neutral-500 mt-1 font-light">Micro-incisions are typically self-sealing.</div>
                                </div>
                                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-black">Custom Lens Fit</div>
                                    <div className="text-xs text-neutral-500 mt-1 font-light">IOL selection matched to your daily vision needs.</div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}