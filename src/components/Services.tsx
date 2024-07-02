import Image from "next/image";

export default function Services (){
    return (
        <div className={"flex flex-col gap-[20px] w-full items-center"}>
            <h1 className={"text-center text-2xl font-semibold"}>
                Берём данные с самых актуальных сервисов
            </h1>
            <p className={"text-lg text-[#747474]"}>
                Все вакансии в одном месте
            </p>
            <div className={"w-full flex items-center px-40 justify-between gap-[25px]"}>
                <button className={"w-full gap-[10px] py-1 flex items-center justify-center bg-[#f6f6f6] rounded-[10px]"}>
                    <img src="/icon/hh.svg" alt=""/>
                    <p className={"font-semibold"}>HEADHUNTER</p>
                    <img src="/icon/vector.svg" alt=""/>

                </button>
                <button className={"w-full gap-[10px] py-1 flex items-center justify-center bg-[#f6f6f6] rounded-[10px]"}>
                    <img src="/icon/tg.svg" alt=""/>
                    <p className={"font-semibold"}>TELEGRAM</p>
                    <img src="/icon/vector.svg" alt=""/>

                </button>
                <button className={"w-full gap-[10px] py-1 flex items-center justify-center bg-[#f6f6f6] rounded-[10px]"}>
                    <img src="/icon/linkedin.svg" alt=""/>
                    <p className={"font-semibold"}>LINKEDIN</p>
                    <img src="/icon/vector.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}