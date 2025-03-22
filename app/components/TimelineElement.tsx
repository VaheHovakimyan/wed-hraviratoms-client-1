import type {HomeProps} from "~/routes/home";

export default function TimelineElement({item}: {item: HomeProps}) {
    const {mainTitle, date, hour} = item;

    return(
        <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className="uppercase">{mainTitle}</h3>
            <h2 className="uppercase">{date}</h2>
            <span className="uppercase">{hour}</span>
        </div>
    );
}
