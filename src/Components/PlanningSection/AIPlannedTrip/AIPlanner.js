import { Configuration, OpenAIApi } from 'openai';

const manipulateResponse = (response) => {
    let arr = response.split("Day");
    let respArr = [];

    arr.map((plan) => {
        if (plan.trim() != "") {
            respArr.push(plan);
        }
    });

    return respArr;
}

const chatGPT_Response = (userQuery) => {
    const openai = new OpenAIApi(new Configuration({
        apiKey: "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"
    }))

    const userinput = {
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user", content: userQuery
        }]
    };

    openai.createChatCompletion(userinput).then((chatGPT_Response_) => {
        const outputWindow = document.querySelector(".planned-trip");
        const response = chatGPT_Response_.data.choices[0].message.content;

        outputWindow.style.height = 'auto';
        outputWindow.style.opacity = '1';

        const animation = document.querySelector(".loading-trip");
        const text = document.querySelector(".creating-trip");
        animation.classList.remove("display-flex");
        text.classList.remove("display-flex");

        const manipulatedRes = manipulateResponse(response);
        let lists = ``;

        manipulatedRes.map((plan, index) => {
            if (lists.toLocaleLowerCase().includes('sustainable tip') || lists.toLocaleLowerCase().includes('carbon footprint') || lists.toLocaleLowerCase().includes('eco-friendly') || lists.toLocaleLowerCase().includes('sustainable') || lists.toLocaleLowerCase().includes('sustainability') || lists.toLocaleLowerCase().includes('sustainable guidelines')) {
                lists += `<li key=${index} class="plannedLists sustained"> <h2 class="guidelines-sus"> With Sustainable Guidelines: </h2>Day${plan} <br/> </li>`;
            }
            else {
                lists += `<li key=${index} class="plannedLists">Day${plan} <br/> </li>`;
            }
        })
        document.querySelector(".all-weather").style.display = "flex";
        outputWindow.innerHTML = lists;
    });
}

export default chatGPT_Response;