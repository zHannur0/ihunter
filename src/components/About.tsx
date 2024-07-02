import React from 'react';

const steps = [
    {
        step: 'Этап 1',
        title: 'Анализ пользователя',
        description: 'Создаем детальный портрет кандидата для точного поиска.',
        imgSrc: '/icon/about1.svg', // Replace with actual image path
    },
    {
        step: 'Этап 2',
        title: 'Процесс подбора',
        description: 'Используем наш алгоритм подбора для нахождения лучших вакансий.',
        imgSrc: '/icon/about2.svg', // Replace with actual image path
    },
    {
        step: 'Этап 3',
        title: 'Сопроводительное письмо и Отлик',
        description: 'Генерируем персонализированные сопроводительные письма и отправляем отклики.',
        imgSrc: '/icon/about3.svg', // Replace with actual image path

    },
    {
        step: 'Этап 4',
        title: 'Контроль откликами',
        description: 'Контролируем и управляем всеми откликами на вакансии.',
        imgSrc: '/icon/about4.svg', // Replace with actual image path

    },
];

const About: React.FC = () => {
    return (
        <section className="w-full flex gap-[50px]">
            {steps.map((item, index) => (
                <div className={"rounded-[20px] p-4 bg-[] w-full max-w-[350px]"} key={index}>
                    <img src={item.imgSrc} alt="" className={"w-full object-cover object-center h-[150px]"} />
                    <div>
                        <p className={"font-semibold text-lg text-[#31D887]"}>
                            {item.step}
                        </p>
                        <p className={"font-semibold text-lg"}>
                            {item.title}
                        </p>
                        <p className={"font-semibold text-sm text-[#A0A0A0]"}>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default About;
