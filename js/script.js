let template = document.querySelector('.template').content;
let fragment = document.createDocumentFragment();
let list = document.querySelector('.list');




const render = (post) => {
    for(i=0; i<post.length; i++){
        let clone = template.cloneNode(true);
        let postName = clone.querySelector('.name');
        let postUser = clone.querySelector('.username');
        let postTitle = clone.querySelector('.title');
        let postBody = clone.querySelector('.body');
        let postPart1 = clone.querySelector('.part-1');
        let postComp1 = clone.querySelector('.component-1');
        let postPart2 = clone.querySelector('.part-2');
        let postComp2 = clone.querySelector('.component-2');
        let postPart3 = clone.querySelector('.part-3');
        let postComp3 = clone.querySelector('.component-3');
        let postPart4 = clone.querySelector('.part-4');
        let postComp4 = clone.querySelector('.component-4');
        let postPart5 = clone.querySelector('.part-5');
        let postComp5 = clone.querySelector('.component-5');
        postName.src = post[i].user.name;
        postUser.textContent = "@" + post[i].user.username;
        postTitle.textContent = post[i].title;
        postBody.textContent = post[i].body;
        postPart1.textContent = post[i].comments[0].name;
        postComp1.textContent = post[i].comments[0].body;
        postPart2.textContent = post[i].comments[1].name;
        postComp2.textContent = post[i].comments[1].body;
        postPart3.textContent = post[i].comments[2].name;
        postComp3.textContent = post[i].comments[2].body;
        postPart4.textContent = post[i].comments[3].name;
        postComp4.textContent = post[i].comments[3].body;
        postPart5.textContent = post[i].comments[4].name;
        postComp5.textContent = post[i].comments[4].body;

        // btn.href = `collapseExample-${i}`;
        // collapse.id = `collapseExample-${i}`;
        
        
        fragment.appendChild(clone);
        list.appendChild(fragment)
        
    }

    let btn = document.getElementsByClassName('button');
    let collapse = document.getElementsByClassName('element');
    
    // btn[1].href = `#collapseExample-1`;
    // collapse[1].id = `collapseExample-1`;
    // btn[2].href = `#collapseExample-2`;
    // collapse[2].id = `collapseExample-2`;
    // btn[3].href = `#collapseExample-3`;
    // collapse[3].id = `collapseExample-3`;
    // btn[4].href = `#collapseExample-4`;
    // collapse[4].id = `collapseExample-4`;
    // btn[5].href = `#collapseExample-5`;
    // collapse[5].id = `collapseExample-5`;
    // btn[6].href = `#collapseExample-6`;
    // collapse[6].id = `collapseExample-6`;
    // btn[7].href = `#collapseExample-7`;
    // collapse[7].id = `collapseExample-7`;
    // btn[8].href = `#collapseExample-8`;
    // collapse[8].id = `collapseExample-8`;
    // btn[9].href = `#collapseExample-9`;
    // collapse[9].id = `collapseExample-9`;

    for(j=0; j<10; j++){
        btn[j].href = `#collapseExample-${j}`;
        collapse[j].id = `collapseExample-${j}`;
    }
    
}

render(posts);

