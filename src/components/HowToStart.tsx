import React from 'react';

const steps = [
    {
        title: 'Создайте свой аккаунт',
        description: 'Ваша учетная запись и личные данные гарантированно в безопасности.',
        imgSrc: '/icon/createAcc.svg', // Replace with actual image path
    },
    {
        step: 'Этап 2',
        title: 'Привяжите свой hh или linkedin',
        description: 'Привяжите, чтобы откликнуться напрямую',
        imgSrc: '/icon/chain.svg', // Replace with actual image path

    },
    {
        step: 'Этап 3',
        title: 'Напишите вашу желаемую должность',
        description: 'Чтобы AI нашел вашу желаемый позиции',
        imgSrc: '/icon/pen.svg', // Replace with actual image path

    },

];

const About: React.FC = () => {
    return (
        <section className="w-full flex gap-[50px]">
            <div className={"w-full space-y-[20px]"}>
                <p className={"text-4xl font-bold"}>Как начать?</p>
                <p className={"text-lg text-[#B6B6B6]"}>
                    Простой и легкий способ начать свою карьеру
                </p>
                <div className={"flex max-w-[610] w-full"}>
                    <input type="text" className={"bg-white p-4 w-full text-lg rounded-[10px]"} placeholder={"Email address"}/>
                    <button
                        className={"py-4 w-full max-w-[200px] text-2xl flex items-center rounded-[10px] justify-center text-white bg-[#FF5858]"}>Get
                        Started
                    </button>
                </div>
            </div>
            <div className={"w-full space-y-[20px]"}>
                {
                    steps.map((step, i) => (
                        <div key={i} className={"px-[20px] py-[10px] bg-[#f6f6f6] flex gap-[20px] rounded-[10px]"}>
                            <img src={step.imgSrc} alt={step.imgSrc}/>
                            <div className={"space-y-[10px]"}>
                                <p className={"font-semibold text-2xl"}>
                                    {step.title}
                                </p>
                                <p className={"text-[#747474] text-xl"}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default About;
