import React from 'react';

const MainContainer = (props: { children: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => {
    return (
        <div className={"w-full flex justify-center"}>
            <div className={"max-w-[1600px] w-full p-20 "}>
                {props.children}
            </div>
        </div>
    );
};

export default MainContainer;