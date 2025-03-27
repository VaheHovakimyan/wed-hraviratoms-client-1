import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import TimelineElement from "~/components/TimelineElement";
import Footer from "~/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment, useEffect } from "react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Hraviratoms.com" },
        { name: "description", content: "Welcome to wed invitation!" },
    ];
}

export interface HomeProps {
    id: number;
    mainTitle: string,
    date: string,
    hour: string
}

const timeline: HomeProps[] = [
    {
        id: 0,
        mainTitle: "Հարսի տուն",
        date: 'Երկուշաբթի, 25 Սեպտեմբերի 2025',
        hour: "12:00"
    },
    {
        id: 1,
        mainTitle: "Պսակադրության արարողություն",
        date: 'Երկուշաբթի, 25 Սեպտեմբերի 2025',
        hour: "14:00",
    },
    {
        id: 2,
        mainTitle: "Հարսանյաց Հանդիսություն",
        date: 'Երկուշաբթի, 25 Սեպտեմբերի 2025',
        hour: "17:30",
    },
    {
        id: 3,
        mainTitle: "Ավարտ",
        date: 'Երկուշաբթի, 25 Սեպտեմբերի 2025',
        hour: "23:00",
    }
];

export default function Home() {
    const tableIndexes: number[] = [1, 2, 3, 4];
    const guestIndexes: number[] = [1, 2, 3, 4, 5, 6];

    useEffect((): void => {
        AOS.init();
    }, []);

    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
            >
                <Welcome />
            </div>

            <div className="flex flex-col gap-4 justify-center items-center m-auto text-center py-10">
                <h2 className="text-3xl">Օրվա ծրագիր ❤️</h2>
                <p>ՍԵպտեմբերի 15, 2025</p>
            </div>

            <div className="flex flex-col gap-[140px] items-center justify-center">
                {timeline.map((item, index) => {
                    return (
                        <div
                            data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="700"
                        >
                            <TimelineElement key={item.id} item={item} />
                        </div>
                    )
                })}
            </div>

            <div className="m-auto text-center pt-20">

                {tableIndexes.map((item: number, index: number) => {
                    return (
                        <Fragment key={item}>
                            <div
                                data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
                                data-aos-offset="200"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="700"
                            >
                                <h3 className="uppercase p-6">Սեղան {item}</h3>
                                {guestIndexes.map((item: number) => {
                                    return <p className="py-1">Հյուր {item}</p>
                                })}
                            </div>
                        </Fragment>
                    )
                })}
            </div >
        </>
    );
}
