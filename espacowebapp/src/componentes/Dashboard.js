/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import imagem1 from '../imagens/imagem1.jpg';
import imagem2 from '../imagens/imagem2.jpg';
import imagem3 from '../imagens/imagem3.jpg';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';

export default class Dashboard extends Component {

    render() {

        return (
                <div>

            <div className="deviceadapter">
              <ResponsiveEmbed a16by9>
                <Carousel>
                    <CarouselItem>
                        <img width={900} height={500} alt="900x500" src={imagem3}/>
                        <CarouselCaption>
                            <h3 className="fundo-carrousel-label">Exemplo de Imagem</h3>
                            <p className="fundo-carrousel-label">Apenas um exemplo.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        <img width={900} height={500} alt="900x500" src={imagem3}/>
                         <CarouselCaption>
                            <h3 className="fundo-carrousel-label">Outro exemplo de Imagem</h3>
                            <p className="fundo-carrousel-label">Outro exemplo</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        <img width={900} height={500} alt="900x500" src={imagem3} />
                        <CarouselCaption>
                            <h3 className="fundo-carrousel-label">Mais um exemplo</h3>
                            <p className="fundo-carrousel-label">Outro exemplo de imagem</p>
                        </CarouselCaption>
                    </CarouselItem>
                </Carousel>
              </ResponsiveEmbed>
            </div>
                <div>

                </div>
            </div>
        )
    }

}
