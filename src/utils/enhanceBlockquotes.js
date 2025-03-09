import tip from "/assets/images/icon-tip.svg";
import warning from "/assets/images/icon-warning.svg";
import information from "/assets/images/icon-info.svg";

export function enhanceBlockquotes() {
    document.querySelectorAll("blockquote").forEach(blockquote => {
        if (blockquote.textContent.includes("Tip")) {
            blockquote.classList.add("tip");

            const img = document.createElement("img");
            img.src = tip; 
            img.alt = "Tip Icon";
            img.className = "mr-[10px] w-[13px] h-[19px] mt-[3px]";

            blockquote.prepend(img);
        } 
        
        if(blockquote.textContent.includes("Warning")) {
            blockquote.classList.add("warning");

            const img = document.createElement("img");
            img.src = warning; 
            img.alt = "warning Icon";
            img.className = "mr-[10px] w-[21px] h-[19px] mt-[3px]";

            blockquote.prepend(img);
        }

        if(blockquote.textContent.includes("Information")) {
            blockquote.classList.add("information");

            const img = document.createElement("img");
            img.src = information; 
            img.alt = "Information Icon";
            img.className = "mr-[10px] w-[19px] h-[19px] mt-[3px]";

            blockquote.prepend(img);
        }


    });
}
