"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType, SVGProps } from "react";
import { useState, type ReactNode } from "react";

type NavItem = {
    label: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    href: string;
    badge?: string;
    badgeColor?: "red" | "yellow";
};

type NavSection = {
    title: string;
    items: NavItem[];
};

// SVG paths updated with stroke="currentColor" to dynamically respect active states!
const navSections: NavSection[] = [
    {
        title: "MAIN",
        items: [
            {
                label: "Overview", 
                icon: (props) => (
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M0.625 0.625H7.29167V7.29167H0.625V0.625ZM8.95833 0.625H15.625V7.29167H8.95833V0.625Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.95833 13.125H10.625M8.95833 13.125V15.625H10.625V13.125M8.95833 13.125V11.4583H10.625M10.625 13.125V11.4583M10.625 13.125H12.2917V11.4583H10.625M0.625 8.95833H7.29167V15.625H0.625V8.95833ZM8.95833 8.95833H10.625V10.625H8.95833V8.95833ZM12.2917 8.95833H13.9583V10.625H12.2917V8.95833Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ), 
                href: "/dashboard"
            },
            {
                label: "Hall of Fame", 
                icon: (props) => (
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M4.60507 11.15L0.965074 4.862C0.808115 4.5907 0.734298 4.27927 0.752787 3.96638C0.771276 3.65349 0.881256 3.35293 1.06907 3.102L2.35707 1.39C2.50611 1.19129 2.69936 1.03 2.92153 0.918917C3.1437 0.807832 3.38868 0.75 3.63707 0.75H13.2371C13.4855 0.75 13.7304 0.807832 13.9526 0.918917C14.1748 1.03 14.368 1.19129 14.5171 1.39L15.7971 3.102C15.9861 3.35212 16.0975 3.65228 16.1174 3.96518C16.1374 4.27808 16.0649 4.58993 15.9091 4.862L12.2691 11.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.2375 8.7475L13.9415 0.907501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.63775 8.7475L2.93375 0.907501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.2375 4.75H11.6375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M8.4375 16.75C10.6466 16.75 12.4375 14.9591 12.4375 12.75C12.4375 10.5409 10.6466 8.75 8.4375 8.75C6.22836 8.75 4.4375 10.5409 4.4375 12.75C4.4375 14.9591 6.22836 16.75 8.4375 16.75Z" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.4375 13.55V11.95H8.0375" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/inductees"
            },
            {
                label: "Regional", 
                icon: (props) => (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M8.75 16.75C13.1683 16.75 16.75 13.1683 16.75 8.75C16.75 4.33172 13.1683 0.75 8.75 0.75C4.33172 0.75 0.75 4.33172 0.75 8.75C0.75 13.1683 4.33172 16.75 8.75 16.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.55 8.75C5.55 5.77139 6.69579 2.90692 8.75 0.75C10.8042 2.90692 11.95 5.77139 11.95 8.75C11.95 11.7286 10.8042 14.5931 8.75 16.75C6.69579 14.5931 5.55 11.7286 5.55 8.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.75 8.75H16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/regional"
            },
            {
                label: "Community", 
                icon: (props) => (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M7.15 10.8775V12.1783C7.14698 12.4524 7.07359 12.7211 6.93686 12.9587C6.80014 13.1963 6.60467 13.3948 6.3692 13.5351C5.86931 13.9054 5.46267 14.3871 5.18159 14.942C4.9005 15.497 4.75273 16.1098 4.75 16.7319" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M10.35 10.8775V12.1783C10.353 12.4524 10.4264 12.7211 10.5631 12.9587C10.6999 13.1963 10.8953 13.3948 11.1308 13.5351C11.6307 13.9054 12.0373 14.3871 12.3184 14.942C12.5995 15.497 12.7473 16.1098 12.75 16.7319" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M13.55 6.35001H14.75C15.2804 6.35001 15.7891 6.13929 16.1642 5.76422C16.5393 5.38915 16.75 4.88044 16.75 4.35001C16.75 3.81957 16.5393 3.31087 16.1642 2.93579C15.7891 2.56072 15.2804 2.35001 14.75 2.35001H13.55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M2.35 16.75H15.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M3.95 6.35C3.95 7.62304 4.45571 8.84394 5.35589 9.74411C6.25606 10.6443 7.47696 11.15 8.75 11.15C10.023 11.15 11.2439 10.6443 12.1441 9.74411C13.0443 8.84394 13.55 7.62304 13.55 6.35V1.55C13.55 1.33783 13.4657 1.13434 13.3157 0.984315C13.1657 0.834285 12.9622 0.75 12.75 0.75H4.75C4.53783 0.75 4.33434 0.834285 4.18432 0.984315C4.03429 1.13434 3.95 1.33783 3.95 1.55V6.35Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M3.95 6.35001H2.75C2.21957 6.35001 1.71086 6.13929 1.33579 5.76422C0.960714 5.38915 0.75 4.88044 0.75 4.35001C0.75 3.81957 0.960714 3.31087 1.33579 2.93579C1.71086 2.56072 2.21957 2.35001 2.75 2.35001H3.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/community"
            },
            {
                label: "Award", 
                icon: (props) => (
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M13.1943 16.75V14.9723C13.1943 14.0294 12.8197 13.125 12.153 12.4583C11.4862 11.7915 10.5818 11.4169 9.63882 11.4169H4.30553C3.36254 11.4169 2.45818 11.7915 1.79139 12.4583C1.1246 13.125 0.75 14.0294 0.75 14.9723V16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M13.1949 0.86499C13.9573 1.06264 14.6326 1.50786 15.1146 2.13076C15.5966 2.75366 15.8582 3.51898 15.8582 4.30659C15.8582 5.0942 15.5966 5.85952 15.1146 6.48242C14.6326 7.10532 13.9573 7.55054 13.1949 7.74819" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M18.5278 16.747V14.9693C18.5272 14.1815 18.265 13.4163 17.7823 12.7937C17.2997 12.1711 16.6239 11.7264 15.8611 11.5294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M6.97176 7.86074C8.93542 7.86074 10.5273 6.26895 10.5273 4.30537C10.5273 2.34179 8.93542 0.75 6.97176 0.75C5.00809 0.75 3.41623 2.34179 3.41623 4.30537C3.41623 6.26895 5.00809 7.86074 6.97176 7.86074Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/award", 
                badge: "3"
            },
        ],
    },
    {
        title: "PARTICIPATE",
        items: [
            {
                label: "Nominations", 
                icon: (props) => (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M16.75 0.750031L7.95 9.55003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M16.75 0.750031L11.15 16.75L7.95 9.55003L0.750004 6.35003L16.75 0.750031Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/nominations", 
                badge: "12", 
                badgeColor: "red"
            },
            {
                label: "Legacy Tributes", 
                icon: (props) => (
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M15.0352 4.17969C16.1596 5.43688 16.7813 7.06441 16.7813 8.75112C16.7813 10.4378 16.1596 12.0654 15.0352 13.3225" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M4.17857 4.17856V13.3214L12.1786 8.74999L4.17857 4.17856Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M0.75 1.89285L4.17857 4.17857V13.3214L0.75 15.6071V1.89285Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M16.1777 1.89286L18.4634 0.75V16.75L16.1777 15.6071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/tributes"
            },
            {
                label: "Events", 
                icon: (props) => (
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M0.75 6.34998H15.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M0.75 3.94998C0.75 3.52563 0.918571 3.11866 1.21863 2.8186C1.51869 2.51855 1.92565 2.34998 2.35 2.34998H13.55C13.9743 2.34998 14.3813 2.51855 14.6814 2.8186C14.9814 3.11866 15.15 3.52563 15.15 3.94998V15.15C15.15 15.5743 14.9814 15.9813 14.6814 16.2813C14.3813 16.5814 13.9743 16.75 13.55 16.75H2.35C1.92565 16.75 1.51869 16.5814 1.21863 16.2813C0.918571 15.9813 0.75 15.5743 0.75 15.15V3.94998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M11.15 0.75V3.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M4.75 0.75V3.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M4.75 10.35H6.35V11.95H4.75V10.35Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/events"
            },
        ],
    },
    {
        title: "EXPLORE",
        items: [
            {
                label: "Witness Archive", 
                icon: (props) => (
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M18.5278 5.19446V16.75H2.52778V5.19446" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M0.75 0.75H20.3056V5.19444H0.75V0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M8.75 8.75H12.3056" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                ), 
                href: "/dashboard/archive"
            },
            // {
            //     label: "Media Gallery", 
            //     icon: (props) => (
            //         <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            //             <path d="M2.75 0.75H18.75C19.2804 0.75 19.7891 0.960714 20.1642 1.33579C20.5393 1.71086 20.75 2.21957 20.75 2.75V14.75C20.75 15.2804 20.5393 15.7891 20.1642 16.1642C19.7891 16.5393 19.2804 16.75 18.75 16.75H2.75C2.21957 16.75 1.71086 16.5393 1.33579 16.1642C0.960714 15.7891 0.75 15.2804 0.75 14.75V2.75C0.75 2.21957 0.960714 1.71086 1.33579 1.33579C1.71086 0.960714 2.21957 0.75 2.75 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //             <path d="M7.25 6.75C7.64782 6.75 8.02936 6.59196 8.31066 6.31066C8.59196 6.02936 8.75 5.64782 8.75 5.25C8.75 4.85218 8.59196 4.47064 8.31066 4.18934C8.02936 3.90804 7.64782 3.75 7.25 3.75C6.85218 3.75 6.47064 3.90804 6.18934 4.18934C5.90804 4.47064 5.75 4.85218 5.75 5.25C5.75 5.64782 5.90804 6.02936 6.18934 6.31066C6.47064 6.59196 6.85218 6.75 7.25 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //             <path d="M19.75 11.75L14.75 6.75L3.75 16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //         </svg>
            //     ), 
            //     href: "/hall-of-fame/gallery"
            // },
            // {
            //     label: "Legacy Library", 
            //     icon: (props) => (
            //         <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            //             <path d="M0.75 16.2338C0.75 15.5494 1.02189 14.893 1.50585 14.4091C1.98982 13.9251 2.64622 13.6532 3.33065 13.6532H17.2661" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //             <path d="M0.75 0.75C0.75 1.43443 1.02189 2.09083 1.50585 2.57479C1.98982 3.05876 2.64622 3.33065 3.33065 3.33065H17.2661V16.75H3.33065C2.64622 16.75 1.98982 16.4781 1.50585 15.9941C1.02189 15.5102 0.75 14.8538 0.75 14.1694V0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //         </svg>
            //     ), 
            //     href: "/hall-of-fame/library"
            // },
            // {
            //     label: "Education Hub", 
            //     icon: (props) => (
            //         <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            //             <path d="M23.2061 6.36401V13.1009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //             <path d="M0.75 6.36404L11.9781 0.75L23.2061 6.36404L11.9781 11.9781L0.75 6.36404Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //             <path d="M5.24123 8.60962V14.2237C8.60965 17.5921 15.3465 17.5921 18.7149 14.2237V8.60962" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            //         </svg>
            //     ), 
            //     href: "/hall-of-fame/education"
            // },
        ],
    },
    // {
    //     title: "ACCOUNT",
    //     items: [
    //         {
    //             label: "My Profile", 
    //             icon: (props) => (
    //                 <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    //                     <path d="M14.9722 16.75V14.9722C14.9722 14.0293 14.5976 13.1249 13.9308 12.4581C13.264 11.7913 12.3597 11.4167 11.4167 11.4167H4.30556C3.36256 11.4167 2.45819 11.7913 1.7914 12.4581C1.1246 13.1249 0.75 14.0293 0.75 14.9722V16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
    //                     <path d="M7.86111 7.86111C8.8041 7.86111 9.70847 7.48651 10.3753 6.81971C11.0421 6.15292 11.4167 5.24855 11.4167 4.30556C11.4167 3.36256 11.0421 2.45819 10.3753 1.7914C9.70847 1.1246 8.8041 0.75 7.86111 0.75C6.91812 0.75 6.01375 1.1246 5.34696 1.7914C4.68016 2.45819 4.30556 3.36256 4.30556 4.30556C4.30556 5.24855 4.68016 6.15292 5.34696 6.81971C6.01375 7.48651 6.91812 7.86111 7.86111 7.86111Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
    //                 </svg>
    //             ), 
    //             href: "/hall-of-fame/profile"
    //         },
    //         {
    //             label: "Settings", 
    //             icon: (props) => (
    //                 <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    //                     <path d="M6.06141 2.4479C6.10557 1.98334 6.32134 1.55193 6.66658 1.23796C7.01181 0.923982 7.4617 0.75 7.92836 0.75C8.39501 0.75 8.8449 0.923982 9.19014 1.23796C9.53537 1.55193 9.75114 1.98334 9.7953 2.4479C9.82184 2.748 9.9203 3.03729 10.0823 3.29129C10.2444 3.54528 10.4652 3.7565 10.7261 3.90706C10.9871 4.05762 11.2805 4.1431 11.5815 4.15626C11.8825 4.16942 12.1822 4.10987 12.4553 3.98265C12.8793 3.79013 13.3598 3.76227 13.8033 3.9045C14.2467 4.04673 14.6214 4.34887 14.8544 4.75212C15.0874 5.15536 15.162 5.63087 15.0637 6.08608C14.9654 6.5413 14.7012 6.94365 14.3226 7.21485C14.0761 7.38784 13.8748 7.61766 13.7359 7.88487C13.597 8.15208 13.5244 8.44883 13.5244 8.75C13.5244 9.05117 13.597 9.34792 13.7359 9.61513C13.8748 9.88234 14.0761 10.1122 14.3226 10.2852C14.7012 10.5563 14.9654 10.9587 15.0637 11.4139C15.162 11.8691 15.0874 12.3446 14.8544 12.7479C14.6214 13.1511 14.2467 13.4533 13.8033 13.5955C13.3598 13.7377 12.8793 13.7099 12.4553 13.5173C12.1822 13.3901 11.8825 13.3306 11.5815 13.3437C11.2805 13.3569 10.9871 13.4424 10.7261 13.5929C10.4652 13.7435 10.2444 13.9547 10.0823 14.2087C9.9203 14.4627 9.82184 14.752 9.7953 15.0521C9.75114 15.5167 9.53537 15.9481 9.19014 16.262C8.8449 16.576 8.39501 16.75 7.92836 16.75C7.4617 16.75 7.01181 16.576 6.66658 16.262C6.32134 15.9481 6.10557 15.5167 6.06141 15.0521C6.03492 14.7519 5.93646 14.4625 5.77439 14.2084C5.61231 13.9543 5.39139 13.743 5.13033 13.5925C4.86927 13.4419 4.57576 13.3564 4.27467 13.3434C3.97358 13.3303 3.67377 13.39 3.40064 13.5173C2.97659 13.7099 2.49608 13.7377 2.05262 13.5955C1.60917 13.4533 1.23449 13.1511 1.00152 12.7479C0.768556 12.3446 0.693959 11.8691 0.792251 11.4139C0.890544 10.9587 1.15469 10.5563 1.53329 10.2852C1.77983 10.1122 1.98108 9.88234 2.12001 9.61513C2.25895 9.34792 2.33149 9.05117 2.33149 8.75C2.33149 8.44883 2.25895 8.15208 2.12001 7.88487C1.98108 7.61766 1.77983 7.38784 1.53329 7.21485C1.15523 6.94352 0.891541 6.54132 0.793486 6.08641C0.695431 5.6315 0.77001 5.15639 1.00273 4.75341C1.23545 4.35042 1.60968 4.04835 2.05269 3.90591C2.49571 3.76346 2.97586 3.79082 3.39984 3.98265C3.67293 4.10987 3.97266 4.16942 4.27364 4.15626C4.57463 4.1431 4.86802 4.05762 5.12897 3.90706C5.38992 3.7565 5.61076 3.54528 5.77278 3.29129C5.93481 3.03729 6.03326 2.748 6.05981 2.4479" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
    //                     <path d="M7.92794 11.1545C9.25581 11.1545 10.3323 10.0781 10.3323 8.7502C10.3323 7.42233 9.25581 6.34589 7.92794 6.34589C6.60008 6.34589 5.52363 7.42233 5.52363 8.7502C5.52363 10.0781 6.60008 11.1545 7.92794 11.1545Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
    //                 </svg>
    //             ), 
    //             href: "/hall-of-fame/settings"
    //         },
    //     ],
    // },
];

export default function HallOfFameLayout({
    children,
}: {
    children: ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = () => setIsSidebarOpen(false);

    // Common Sidebar Content to avoid duplication
    const SidebarContent = () => (
        <aside className="flex h-full w-[300px] flex-col border-r border-[#001F3F73] bg-[#000D1C] overflow-y-auto">
            {/* Header / Logo */}
            <div className="flex h-[112px] shrink-0 items-center justify-between border-b border-[#FFFFFF1A] px-6">
                <div className="flex items-center gap-4">
                    <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-full">
                        <Image
                            src="/logo/hlogo.svg"
                            alt="Black Tech Expo Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h1 className="text-[18px] font-semibold leading-[1.15] text-[#DBD2C8]">
                        <span className="text-[#B1A393]">Black Tech Expo</span><br />
                        Hall of Fame
                    </h1>
                </div>

                {/* Close Drawer Button - Mobile Only */}
                <button 
                    onClick={closeSidebar}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[#BDC7D1] hover:bg-white/5 xl:hidden"
                    aria-label="Close menu"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 px-[27px] py-8">
                {navSections.map((section) => (
                    <div key={section.title} className="mb-7 last:mb-0">
                        <p className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-[#586372]">
                            {section.title}
                        </p>

                        <div className="space-y-2">
                            {section.items.map((item) => {
                                const Icon = item.icon;

                                const isActive =
                                    item.href === "/dashboard"
                                        ? pathname === "/dashboard"
                                        : pathname.startsWith(item.href);

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={closeSidebar} // Automatically closes drawer on navigate
                                        className={[
                                            "flex h-[45px] w-full items-center gap-[10px] rounded-[10px] px-3 py-[7px] text-[15px] font-medium transition duration-200",
                                            isActive
                                                ? "border-t border-[#D9B700] bg-[#2E2700] text-[#D9B700]"
                                                : "text-[#BDC7D1] hover:bg-[#07182B] hover:text-[#D9B700]",
                                        ].join(" ")}
                                    >
                                        <Icon
                                            className={[
                                                "size-[20px] transition-colors duration-200",
                                                isActive ? "text-[#D9B700]" : "text-[#7A765D]"
                                            ].join(" ")}
                                        />

                                        <span className="flex-1">{item.label}</span>

                                        {item.badge && (
                                            <span
                                                className={[
                                                    "flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-bold",
                                                    item.badgeColor === "red"
                                                        ? "bg-[#F43F5E] text-white"
                                                        : "bg-[#E8C600] text-[#111111]",
                                                ].join(" ")}
                                            >
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    );

    return (
        <div className="flex min-h-screen bg-white">
            
            {/* 1. Desktop Sidebar (Always Visible on XL screens, hidden below) */}
            <div className="hidden xl:block xl:shrink-0">
                <SidebarContent />
            </div>

            {/* 2. Mobile Backdrop (Overlays page when sidebar drawer is open) */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 xl:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* 3. Mobile Sidebar Drawer (Slides in on mobile, hidden on Desktop) */}
            <div 
                className={[
                    "fixed bottom-0 top-0 z-50 transition-transform duration-300 ease-in-out xl:hidden",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                ].join(" ")}
            >
                <SidebarContent />
            </div>

            {/* 4. Main App Container */}
            <div className="flex min-w-0 flex-1 flex-col">
                
                {/* Floating Mobile Sticky Header (Visible only on smaller devices to toggle the menu) */}
                <header className="flex h-14 items-center justify-between border-b border-[#001F3F20] bg-[#F8F4EA] px-4 xl:hidden">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#001F3F20] text-[#001F3F] hover:bg-[#001F3F]/5"
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </button>
                    
                    <span className="text-sm font-bold text-[#001F3F]">
                        Black Tech Expo
                    </span>
                    
                    <div className="w-9" /> {/* Spacer to align title cleanly */}
                </header>

                <main className="min-w-0 flex-1 bg-[#F5EBE1]">
                    {/* <Navigation /> */}
                    {children}
                </main>
            </div>

        </div>
    );
}
