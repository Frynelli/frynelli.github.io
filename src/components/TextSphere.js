import { useEffect } from "react";
import TagCloud from "TagCloud";

const TextShpere = ()=>{
    useEffect(()=>{
        return()=>{
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "React",
                "GIT",
                "GITHUB",
                "NodeJs",
                "Wordpress",
            ];
            const options = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };
            TagCloud(container, texts, options);

        };
    },[])
    return <>
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
    </>
}

export default TextShpere;