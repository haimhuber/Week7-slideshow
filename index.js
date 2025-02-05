function createSlideShow() {
    const slidesArray = [
        {
            pictureAlt: "This is the first picrute",
            silde: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            pictureAlt: "This is the second picrute",
            silde: "https://media.istockphoto.com/id/496065122/photo/mount-hanang-chameleon.jpg?b=1&s=612x612&w=0&k=20&c=Sm9QLJTH97AltAIjxrcNM6qzfd5NZ4oLefmcFIaSBds="
        },
        {
            pictureAlt: "This is the third picrute",
            silde: "https://media.istockphoto.com/id/497267607/photo/truro-cathedral-cornwall-england.jpg?b=1&s=612x612&w=0&k=20&c=1y3VIXB_7tPj8AK6qDqq1_370fqvG2h6HIfHSleVmZE="
        },
        {
            pictureAlt: "This is the forth picrute",
            silde: "https://media.istockphoto.com/id/1367183692/photo/imports-of-goods-from-other-countries-have-increased-at-an-exponential-rate-import-and-export.jpg?b=1&s=612x612&w=0&k=20&c=89DR2sicL4JETSI48c60SSfnRilgKf6KWjSe6oMwqcg="
        },
    ];
    let count = 0;
    const counterEvent = document.querySelector('.button');
    counterEvent.addEventListener("click", (event) => {
        count = (count + 1) % slidesArray.length;
        mainText.textContent = slidesArray[count].pictureAlt;
        mainSlideic.setAttribute('src', slidesArray[count].silde);

    });

    const mainDiv = document.createElement('div');
    const mainText = document.createElement('h1');
    const mainSlideic = document.createElement('img');
    mainDiv.classList.add('mainText');
    mainText.textContent = slidesArray[count].pictureAlt;
    mainDiv.appendChild(mainText);

    mainSlideic.setAttribute('src', slidesArray[count].silde);
    mainDiv.appendChild(mainSlideic).nextSibling;
    document.querySelector('body').appendChild(mainDiv);

}
createSlideShow();

