document.querySelector('.year-now').innerHTML = ['©', (new Date()).getUTCFullYear(), document.title].join(" ");
        document.querySelectorAll('.sc').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.classList.contains("list-element")) {
                    this.querySelector("svg").classList.toggle('tapped');
                }
                let aHref = this.getAttribute('href').substring(1);
                let element = document.getElementById(aHref);
                element.classList.toggle('closed');
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });