 
 
export default function AnimationPing() {
    return (
<span className="inline-block absolute top-0">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4  bg-red-700"></span>
                    </span>
                </span>
    );
}