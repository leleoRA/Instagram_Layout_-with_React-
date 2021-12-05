
function Story({nome,src}) {
   return(
                <div class="story">
                    <div class="imagem">
                        <img src={src} alt={nome}/>
                    </div>
                    <div class="usuario">
                       {nome}
                    </div>
                </div>
   )
}
export default function Stories() {
    const nomes = [
        {
           nome:'9gag',
           src: 'assets/img/9gag.svg'
        },
        {
           nome:'meowed',
           src:'assets/img/meowed.svg'
        },
        {
           nome:'barked',
           src:'assets/img/barked.svg' 
        },
        {
           nome:'nathanwpylestrangeplanet',
           src:'assets/img/nathanwpylestrangeplanet.svg' 
        },
        {
           nome:'wawawicomics',
           src:'assets/img/wawawicomics.svg' 
        },
        {
           nome:'respondeai',
           src:'assets/img/respondeai.svg' 
        },
        {
           nome:'filomoderna',
           src:'assets/img/filomoderna.svg' 
        },
        {
            nome:'memeriagourmet',
            src:'assets/img/memeriagourmet.svg' 
        }  
    ];
    return(
            <section class="stories">
                {
                    nomes.map((n) =>  <Story nome ={n.nome} src = {n.src} />)
                }
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </section>
    )
    
}



    
