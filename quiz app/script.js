const quizDB=[
    {
        question: "Q1: What is the full form of HTML",
        a:"Hello to my land",
        b:"Hyper text makeup language",
        c:"Hyper test markup language",
        d:"Hyper Text Markup Language",
        ans:"ans4"
    },
    {
        question: "Q2: What is the full form of CSS",
        a:"Cascading service Sheet",
        b:"cascading Style Sheep",
        c:"Cascading Style Sheet",
        d:"Caring Style Sheet",
        ans:"ans3"
    },
    {
        question: "Q3: What is the full form of js",
        a:"jwalascript",
        b:"JavaScript",
        c:"Jscript",
        d:"jovaScript",
        ans:"ans2"
    },
    {
        question: "Q4: What is a dequeue?",
        a: "A queue with insert/delete defined for both front and rear ends of the queue",
        b: "A queue implemented with a doubly linked list",
        c: "A queue implemented with both singly and doubly linked lists",
        d: "A queue with insert/delete defined for front side of the queue",
        ans:"ans1"
    },
    {
        question: "Q5: What is the full form of DBMS",
        a:"Database Management Servelet",
        b:"Database Merging Service",
        c:"Databound Management Service",
        d:"Database Management Service",
        ans:"ans4"
    }
];
        const question=document.querySelector('.question');
        const answer1=document.querySelector('#option1');
        const answer2=document.querySelector('#option2');
        const answer3=document.querySelector('#option3');
        const answer4=document.querySelector('#option4');
        const submit=document.querySelector('#submit');
        const answers=document.querySelectorAll('.answer')
        let score=0;
        const showScore=document.querySelector('#showScore');

        let quesCount=0;
        const loadQuestion=()=>{
        const quesList= quizDB[quesCount];
        question.innerText=quesList.question;
        answer1.innerText=quesList.a;
        answer2.innerText=quesList.b;
        answer3.innerText=quesList.c;
        answer4.innerText=quesList.d;
        }

        
        loadQuestion();
       const  getCheckAnswer=()=>{
        let answer;
        answers.forEach((currAns) => {
            if(currAns.checked){
                answer=currAns.id;
            }
        });
        return answer;
        };

        submit.addEventListener('click',()=>{
            const checkedAnswer=getCheckAnswer();
            console.log(checkedAnswer);
            if(checkedAnswer==quizDB[quesCount].ans){
            score++;
            }
            quesCount++;
            if(quesCount<quizDB.length){
                loadQuestion(quesCount)
            }
            else{
                showScore.innerHTML=`
                <h3> You Scored ${score}/${quizDB.length} </h3>
                <button class="btn" onclick=" location.reload()" >PLAY AGAIN </button>
                `;
                showScore.classList.remove('scoreArea');
            }
        });

