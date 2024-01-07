function Icon({ icon, text }: { icon: any, text?: string }) {
    return (
        <a href="" className="w-full">
            <div className="flex w-fit rounded-3xl px-3 hover:bg-zinc-900 py-3">
                <div>{icon}</div>
                <span className="ml-4 text-xl">{text}</span>
            </div>
        </a>
    );
};

export default Icon;