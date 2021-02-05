// array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Betty White', 
     'quote': 'My mother always used to say: The older you get, the better you get, unless you’re a banana.'
    },
    {'author': 'Mitch Hedberg', 
     'quote': 'I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.'
    },
    {'author': 'Jerry Seinfeld', 
     'quote': 'Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.'
    },
    {'author': 'Rodney Dangerfield',
     'quote': 'I haven’t spoken to my wife in years. I didn’t want to interrupt her.'
    },
    {'author': 'Les Dawson', 
     'quote': 'I used to sell furniture for a living. The trouble was, it was my own.'
    },
    {'author': 'Steven Wright', 
     'quote': 'Someone asked me, if I were stranded on a desert island what book would I bring: ‘How to Build a Boat.'
    },
    {'author': 'Bobby Boucher(Adam Sandler)', 
     'quote': 'My Mama says that alligators are ornery because they got all them teeth and no toothbrush.'
    },
    {'author': 'Jimmy Kimmel', 
     'quote': 'I never feel more alone than when I’m trying to put sunscreen on my back.'
    },
    {'author': 'Steve Martin', 
     'quote': 'A day without sunshine is like, you know, night.'
    },
    {'author': 'George Burns', 
     'quote': 'You know you’re getting old when you stoop to tie your shoelaces and wonder what else you could do while you’re down there.'
    },
    {'author': 'Harry Dunne (Jeff Daniels)', 
     'quote': 'Police officer: “Pull over.” Harry: “No, it’s a cardigan. But thanks for noticing.”'
    },
    {'author': 'Wayne Gretzky --MICHAEL SCOTT', 
     'quote': 'You miss 100% of the shots you don/t take.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}