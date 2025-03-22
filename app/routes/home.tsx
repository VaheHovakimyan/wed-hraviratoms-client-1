import type {Route} from "./+types/home";
import {Welcome} from "~/welcome/welcome";
import TimelineElement from "~/components/TimelineElement";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Hraviratoms.com"},
        {name: "description", content: "Welcome to React Router!"},
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
        mainTitle: "Restaurant",
        date: 'Monday, 25 September of 2025',
        hour: "12:00"
    },
    {
        id: 1,
        mainTitle: "Restaurant",
        date: 'Monday, 25 September of 2025',
        hour: "14:00",
    },
    {
        id: 2,
        mainTitle: "Restaurant",
        date: 'Monday, 25 September of 2025',
        hour: "16:00",
    },
    {
        id: 3,
        mainTitle: "Restaurant",
        date: 'Monday, 25 September of 2025',
        hour: "18:00",
    }
];

export default function Home() {
    return (
        <>
            <Welcome/>

            <div className="flex flex-col gap-4 justify-center items-center m-auto text-center py-10">
                <h2 className="text-3xl">Օրվա ծրագիր ❤️</h2>
                <p>September 15, 2025</p>
            </div>

            <div className="flex flex-col gap-[140px] items-center justify-center">
                {timeline.map((item) => <TimelineElement key={item.id} item={item}/>)}
            </div>

            <div className="m-auto text-center pt-20">
            <h3 className="uppercase p-6">Table 1</h3><p className="py-1">Guest Gustavo 1</p>
            <p className="py-1">Guest Gustavo 2</p><p className="py-1">Guest Gustavo 3</p>
            <p className="py-1">Guest Gustavo 4</p><p className="py-1">Guest Gustavo 5</p>
            <p className="py-1">Guest Gustavo 6</p><h3 className="uppercase p-6">Table 2</h3>
            <p className="py-1">Guest Gustavo 1</p><p className="py-1">Guest Gustavo 2</p>
            <p className="py-1">Guest Gustavo 3</p><p className="py-1">Guest Gustavo 4</p>
            <p className="py-1">Guest Gustavo 5</p><p className="py-1">Guest Gustavo 6</p>
            <h3 className="uppercase p-6">Table 3</h3><p className="py-1">Guest Gustavo 1</p>
            <p className="py-1">Guest Gustavo 2</p><p className="py-1">Guest Gustavo 3</p>
            <p className="py-1">Guest Gustavo 4</p><p className="py-1">Guest Gustavo 5</p>
            <p className="py-1">Guest Gustavo 6</p>
            <h3 className="uppercase p-6">Table 4</h3><p className="py-1">Guest Gustavo 1</p>
            <p className="py-1">Guest Gustavo 2</p><p className="py-1">Guest Gustavo 3</p>
            <p className="py-1">Guest Gustavo 4</p><p className="py-1">Guest Gustavo 5</p>
            <p className="py-1">Guest Gustavo 6</p>
            </div>
        </>
    );
}
