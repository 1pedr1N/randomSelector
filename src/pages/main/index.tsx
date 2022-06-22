import React from 'react'
import * as S from './styles'

const MainPage = () => {
    return (
        <S.Container>
            <S.Title>Choices!</S.Title>
            <S.MainContainer>
                <S.ContainerBox>
                    <div className="field-row-stacked inputSize">
                        <label htmlFor="text22">
                            Qual tema deseja escolher?
                        </label>
                        <input id="text21" type="text" />
                        <button>Vá para as escolhas!</button>
                    </div>

                    <div className="field-row-stacked">
                        <label htmlFor="text22">
                            Dentro deste tema qual item voce deseja sortear?
                        </label>
                        <div className="row">
                            <select id="text21" style={{ width: '100%' }}>
                                <option>Almoço</option>
                                <option>Jantar</option>
                            </select>
                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 10,
                                    marginBottom: 6,
                                }}
                            >
                                Enviar
                            </button>
                        </div>
                        <div>
                            <div className="window" style={{ width: '400px' }}>
                                <div className="title-bar">
                                    <div className="title-bar-text">
                                        A Window With Tabs and Groups
                                    </div>
                                </div>
                                <div className="window-body">
                                    <menu role="tablist">
                                        <button
                                            aria-selected="true"
                                            aria-controls="music"
                                        >
                                            Music
                                        </button>
                                        <button aria-controls="dogs">
                                            Dogs
                                        </button>
                                        <button aria-controls="food">
                                            Food
                                        </button>
                                    </menu>
                                    <article role="tabpanel" id="music">
                                        <p className="blackColor">
                                            Suas preferencias para o Almoço
                                        </p>
                                        <fieldset>
                                            <legend className="blackColor">
                                                Choice do dia
                                            </legend>
                                            <div className="field-row">
                                                <input
                                                    id="radio29"
                                                    type="radio"
                                                    name="fieldset-example2"
                                                />
                                                <label
                                                    htmlFor="radio29"
                                                    className="blackColor"
                                                >
                                                    Nicki Minaj
                                                </label>
                                            </div>
                                            <div className="field-row">
                                                <input
                                                    id="radio30"
                                                    type="radio"
                                                    name="fieldset-example2"
                                                />
                                                <label
                                                    htmlFor="radio30"
                                                    className="blackColor"
                                                >
                                                    Bell Towers
                                                </label>
                                            </div>
                                            <div className="field-row">
                                                <input
                                                    id="radio31"
                                                    type="radio"
                                                    name="fieldset-example2"
                                                />
                                                <label
                                                    htmlFor="radio31"
                                                    className="blackColor"
                                                >
                                                    The Glamorous Monique
                                                </label>
                                            </div>
                                            <div className="field-row">
                                                <input
                                                    id="radio32"
                                                    type="radio"
                                                    name="fieldset-example2"
                                                />
                                                <label
                                                    htmlFor="radio32"
                                                    className="blackColor"
                                                >
                                                    EN. V
                                                </label>
                                            </div>
                                        </fieldset>
                                        <section className="field-row">
                                            <button>Apagar items</button>
                                            <label className="blackColor">
                                                Esta ação nao poderá ser
                                                revertida
                                            </label>
                                        </section>
                                    </article>

                                    <article role="tabpanel" hidden id="dogs">
                                        <img
                                            style={{ width: '100%' }}
                                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhMVFxgYGBgYGBgYFRcdGxgYFhYdGBoYHiggGBslGxoXIjEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGislHyUtLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTctN//AABEIAKUBMgMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCAQj/xAA2EAABAwIEBAMIAgEEAwAAAAABAAIRAyEEBTFBBhJRcSJhkQcTMoGhscHw0eFCFCNS8RVygv/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EAB8RAQEAAgMBAAMBAAAAAAAAAAABAhEDITESMkFRBP/aAAwDAQACEQMRAD8Aw1ERAREQEREBERAREQERSfD2VnE1204dB+LliQJA38yEHNluDdWqNY0ElxAW15TwJSpAEMvF/Pr5eYPVTfDfBNDDhpaHc1p5oP4sOytrcOJVWWScij5twu2qwtLBe3cDYnvp81lOfcHPpVOUbuhp2IOnSCv6TGHB2UVnuSio2w8QMg/dJk7p/Nj+GcQ14Y5oExcEOF+karmzHJK1H42ROlwT6Bf0ZSyBjL8oNoGm2nZR+N4covPM9rSRpOy79ufL+cyI1X4tF9oeTYWn42SHx8LAIO0k/uizpTl2jZoREXXBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFffZRgXHFgyRLTsCIkjxTuCFUsjwJrVmNAOokjbp2kr+huCsg9x4nQXQBOpHlMbaKGd60njFtoMgD8roaxfK534wfJZss9LccduqoQAuSvjA34tFz1MU4iWsLvsuWu+Z5p54kACw6qu8v8WTj/AKkjTDrhcuJoxtZfuV1SWCRBuPTTVdrzKuxu4qymqqeaZPSqjxNafOAsn484cp0GlzaZDuoNra2W34ujOipPFdMmm4P0g/t5lTxukbNsGRe+NphtRzWyQDAnX6LwV6oRFN8PcN1cU5nKP9tzw0ukW6x2F0EPTplxAaCSdABJPyC+jhngElrgBE2Np0lbvwtwbSwjg6mLlsFzvE4m+g0bYx8lPVshpPAaYB0mLnrfqq7nE/h/MqLXOPeA6RHvKIFOoBZjR4XQTrHwmI9FktRhaSCIIMEHUHeVOXaNmnyiIuuCIiAiIgIiICIiAiIgIiICIiAiIgIiIC6stwpqVGtAm4np8+65VePZZgPfYggkBrRJH+R6X6Lluo7JutD4MwFMhobhx4YvygCe5M+q0PCUiNV4YGgGi0AKSA5RO6otXSPDFPIB6/gr4w+FBhztBsvEnmgk6xbyC7mEabKnGfV2svU0rPEnGNDBEc5EmzW/fsuPB8WCtL2C29pjudhdeXF/BBxL3Fjy3nADo0Nw479Wt9FI8P8ADNLDUi14B08Tm9BA7aLmXFf6sxzxk8e1HOmnl6kgKTNaFk+c5u3DV3OY0+F3w3cHEui1wGiLyfqrzw/nIxWHp1+UsDwZab6EtkHcGJB6Fdxl12hySb6SuJfKovHmIaKLi4bfNWurWgwT/BWV+1jNmmKTTJkT5d/5VmHdVXqMzcbr8RFqUPXC0C97WDVxA9VvfCmUsw9JjWCwJMnc6T5WWIcP0+bEUxE3/C/oPJnHkAMWFlXyVPCJdoheGIqr15rLnrRCy2r5EFm7XczXDrczBB9Fm3tGyHlcMQwDlNnx12NtFpWa1+Vpt4db7LKuNs9NQim0kDfYEadbq3i3tHk1pT0RFpZxERAREQEREBERAREQEREBERAREQEREBal7I30mtcY/wB0u18gstWmeynDv5+QMME8xdHh0sPM/sbqvk/FPj9bhlbi65ELvxTJEdl4YKlygBe7qkC6z29aXxD5k8sIC9mYi1omP3RcuYVOaTFpXJzuANyCLT5bfhVYZaq647j6xOZ1Wmw7A6LizLOa4pEHD+8ndr2Bo+bivSvmZiH8rjtLQD9IKr2NxTnH/bZ6kx6Cfup3lRnGo3E2CrOfemIcb8rpA7SBPorzkOMZRw7KYgBjdNurvqSouvlNao/mdvsP7UxQyQRB03C592+Fx17ULnvEDj4G2ib6lZpxIXFwc687/wArW8ZkbB8LBKo/EmVASC2+1wrOO6qvObigovqoyCR0XytbKufs8yf3jzVc0kCzbiPOeh0+q2HK8OQ0Rttqs09lD+YPb0dp5G/3Wt4emABCz8uXa7CdPWbLkxFTWy7XGy4MQ8CSdLhURarPElaGOAbJj90WKZpXL6riYkGLaWstX48zBzMM6HN6AyQ6+3Q6BY8StPFP2p5L+n4iIrlQiIgIiICIiAiIgIiICIiAiIgIiICIiCx8J8P/AOoe0uBLZsP+Ufid+/Rb9wnkjaDNBOwGg/krOPZLjqLwWGA9gAiwnzHVbCx4gALLy5dtHHj07KR3XzX0QVbLmfidlRlVsjnrNkQuHGjlPcfZd5eI1XFinTrt6qKcrkZhGv1C7aOXNAiAmGpKQapYxHK1w1aQaNLBceJqAC0Luxg1XBVZI0Oi7cnJEVWqyqlxXgxVpkAwdj0/pWjEuAMecKHzOmBM7+i5jlqpXHpmlTg7FQS0Nf2cJ26x1UZislxFP46NQDrykj1FlrmWsnsrFhqIV0/0Xfaq8E/TL/ZHiQMRUYdXNBHWxM/dbOx0KOGUUXPD3MaKjZLXADnE2Nxde4p1Gu5YkO0M6dwo55fXcMMddPWriFAZzmopjxGxC8M+z+nh3uY/4htab3kLO+I+JBUOttmjqmGNrudkRfF2dOrv5f8AEf36KvL6qPkk9SvlbJNTTLbuiIi64IiICIiAiIgIiICIiAiIgIiICIiAiIg6MDjH0XtqU3FrmmQVsPCPtAOIZy1IFVu3XS4H48liykMgw5qYmiwEgue0W11vp5KvkwmU7WYZ3Gt4ocVS4zA+evZe7eIqbrA36HX0UbxHw9SLA4DlfoC2w0kBw/Ko1bB12H4jExP73Cw3j1fW2ZyzxpZzll/ELea8nZ6wG5n7LPKGEqk3JIU/gsqJABkjoVC7iUkqx4DiJnveQ2BNr6lWUY9p0OvT7qnUMmboSJ2+v1XJUdXoEkXHlHMY0HZdxyv7Ryxl8W/E1yNP+1A43MHM+E7aahVrEcWYho5fdHmPb9hV/GcQYhxPhAO86qXxvxyXXqbzTG1fi0Ciq+bufDSbNUNicbVqfG4x5aL8w7YgKfxpz72veRVZAkgT11Vpwbp1VSyPSI2Vnw0Hc230+yovq1Kl/KPsuDE5idBrr6L5q1iNXCFGY7GhokdTO56KWNu0MpNM746x5e0DlEucXOd/lrAE9I+6pSv/ABFh21XmGxLfoBaB3kqgL0OPxi5fRERWKxERAREQEREBERAREQEREBERAREQEREBERAXvgsU6lUbUYYcwhw7heCIP6CyrNW4zC06ouHNAeJ+Fw+Kel9F61QASGwQBcRM389/4Cx3gfiQ4OqeafdVAA4bA7OjykrS8TX5XNfB5XXEaHzlZs8NVowy3EiMMwnmbcaRuNtLLowYERMRY9frsuPCYtsSHTNiNxuJtK/Pfkus60GOb+e6oyi6VMNdy/CLev3XE6sCTzanroo1uaNJLXyNt489d91418WOaGgO8unWyr0m+sXQaZdzCe30BKrOIwgEkjXrqpyq4Hrr8MgQdel1GZkfDG5+itxQqt1S2bBe+EoS4fui8qxbTP7qpDJKZceYqV8cizZbTMWU4y1r/YKOwAspZoPIdOW09fkqNLdozMKsA3/fmq5jK7jqZHeI81KZ2bgNP7877KpZhiw0QdzMwCSNldhgryyfeZYpnM0tNwINrRqOvl9VQyrFiarix55YsddQq4teEZM6IiKaAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC2/gykMTl1EgFzqbC2BE+GQJ+ixBbD7GKp/0lcXtUsNrtb91Xyfinx+vHMa5okcoIkwb3kC9vRR1POXz4Z0sNb/ALsrXnOXcwJdEuJMekd/+1B5LkHNWbLgXahoEn5nQLLLtq1opDE4iAXco1iBrupLD5O9kHmkkHTW1yrjhcsFGXEa7QDNly4pji0+7DWkTrJD9df6UMr2lPFZbTbygNIJGokc3zB0vIUdmFQATeR5Kfr0BUHjaG1Lx5EbAqm8VF1ORo52rZsPMKeM2hldISvVbWqy3QffdWrLKENsqXkR9Zur/lFIkD9ClyTXTmF32lMFSMSphlHwkTcx21XzhMPa66sVoYCpkWWqFxbUsTflBAA/j5qjHGh1QHl+HSevVafnmC5wBAt6g91Qv/GgVi13Xt8/ur8bqK7Nudpc8QbgCPz9yo3NcjdSaHtkt3Gpb3jZX7CZKIkQepGny+QXfVwkCSByEwBsbaf9rs5dVHLj3GNIrbxZkIpj3rWwDsNP6VSWmWWbjPZoREXXBERAREQEREBERAREQEREBERAREQEREBERAWwew9o91XJJPjHhm3wi8dfPyWPrU/YhjfFXomIhrx1/wCJ+Wnqocn4pYerxmmFmSL+Ui2y9eEcL4yS2/b0E6+fyXTmGunaFI8OUOVpcZknfpEBY8fWq/i6ceNoEeWnZQ9dnIy0z9ZU1jHh23z8lE46QNdCNdNv7UbN13G9ITMGGo0NFjqDvP7Kp3FpDqR95aowa7+RHUK9Y7DujUc2v8KkcVVxUYWuADgCCNiFZgjkpnC8OJm5ladktKAFlXCuIDa0GLrXsreICnzTtDjvSewxAF1+V6wNhquR1RefvFStc+ZPHLBGosenUHyVVfTBeCRIBB7jX7KbzKpKgG1IeB5wpXxyRZcE0BpDSLttHUm4jay9K7ZY1ms7R6LxylliXW81INpcxmAQ3rbdV5LIgMza145SwiLEH9+/kqDn3DJbL6QMbt3HZajmjg958MFsAbnv2/lcx5CPEJCs4+SxDk45WIEL8V14v4faJq07eWoKpS245bm2OzQiIuuCIiAiIgIiICIiAiIgIiICIiAiIgIiIC1D2KUBzV37+Fo67k3+YWXrQ/Y5XIr1WzYsBjqQdfRRz/FLD1ruMp88CY0U7RbytHZV11eHt/8AYT9VOPqSFj202eOKrXIJnRRdarqXnQHsu/nBMfvX97rjzGg0tvOt436KGKVV3MMe7nJeS3TQaf0qBxzmPNBbY6EjdaXmGHABJdzWtN/rH0WS8Y1hJadT+Cr+Odqs70rNN5aQRqDK1rhrM+djepAn0WRLSfZ/Wa5gAN22PVW8s3FfHdVdzVsvqo0wjCOYDbVMViQO/wBlkaoicS6/r9FBZjSDSpXGB3KTsTt3v+FGVxzTI0XYV3ZBmUt5SbAyf30VpbUBi8CFj3/mP9PXe0XYSNP8Vccjz73vNUZ8LbAG0mPxb1U8+PU2hjnu6WbM6RID2G4IMdRvO65areWmSD8ILiNYXHSqVeVrwNZ67GNOm6/cyzBvKWP8NXTw/C7aCT1Cpnq6+IjF4xr2OBIgg6/n5rNcdR5HuaNAVbsyc2k13i1mJBm1jbcdiqXUfJJ6rbxTpj5fXyiIrVQiIgIiICIiAiIgIiICIiAiIgIiICIiApThvOH4Su2qwAn4SDuDr2RFyuz1t2CxJq1GSLFzbT2d+Fa8ZUgGOiIsN8a/3EM6s7msY0/fouTF1jyxO32CIq8VmStZtjnspCDJ1n/6hZbn2IL6pnUflEWzhZeVGqb4Sxz6dcBps7UbWBIRFbl5VWPrWMFWJBedY+y+qniI6nX9/dURYW18YxvKz5H8qu8RHkY0t1db8oinghkzbHVC6o4nWf6XrgszqUrNd4d27GdV+otmumXa6uzqryNfMTcj0sofPc4qObLrk7yQZ6+ZhEVGOM+l9yvyrVXEPd8Tie5leSItDOIiICIiAiIgIiICIiD/2Q=="
                                        />
                                    </article>

                                    <article role="tabpanel" hidden id="food">
                                        <p>
                                            You create the content for each tab
                                            by using an <code>article</code>{' '}
                                            tag.
                                        </p>
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src="https://www.youtube.com/embed/TODJBQ0tnow"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </article>
                                    <section
                                        className="field-row"
                                        style={{ justifyContent: 'flex-end' }}
                                    >
                                        <button>Enviar</button>
                                        <button>Cancelar</button>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </S.ContainerBox>
            </S.MainContainer>
        </S.Container>
    )
}

export default MainPage
