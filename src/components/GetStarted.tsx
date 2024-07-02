
export default function GetStarted (){
    return (
        <div className={"flex flex-col gap-[40px] w-full items-center"}>
            <h1 className={"text-center font-semibold text-4xl w-[35%]"}>
                IHunter - автономный агент для поиска работы.
            </h1>
            <p className={"text-center text-lg"}>
                Результаты уже в течение первых 14 дней
            </p>
            <div className={"flex gap-[10px] max-w-[790px] w-full"}>
                <input type="text" className={"bg-white p-2 w-full rounded-[10px] text-xl"} placeholder={"Email address"}/>
                <button className={"py-2 w-full max-w-[290px] text-2xl flex items-center rounded-[10px] justify-center text-white bg-[#FF5858]"}>Get Started</button>
            </div>
        </div>
    )
}