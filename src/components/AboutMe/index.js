import React from 'react';

import SocialLinks from '../SocialLinks'
import { MainContent } from './styles';

export default function AboutMe() {
  return (
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Matheus Trajano Antonino, nasci em Recife/PE e
        atualmente estou cursando ciência da computação e trabalho como analista de software na{' '}
        <a href="https://www.concrete.com.br/" target="_blank" rel="noopener noreferrer">
          Concrete.
        </a>
        {' '}Tenho uma paixão pelo design web e adoro desenvolver para dispositivos móveis e web.
      </p>

      <h1>O que eu posso fazer</h1>

      <h3>Projete o que você quer</h3>

      <p>Eu gosto de simplificar. Meus objetivos são focar na tipografia, no conteúdo e na transmissão da mensagem que você deseja enviar.</p>

      <h3>Desenvolva o que você precisa</h3>

      <p>Como desenvolvedor, sei como criar seu site para rodar em dispositivos usando as tecnologias mais recentes disponíveis.</p>

      <h1>Habilidades</h1>

      <ul>
        <li>HTML</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS</li>
        <li>Css Frameworks (Bootstrap)</li>
        <li>Javascript (Design Patterns, Testes, ES6/7)</li>
        <li>ReactJS / Redux / Flux</li>
        <li>React-Native / Redux / Flux</li>
        <li>NodeJS</li>
        <li>Git - Github</li>
        <li>MySQL - MongoDB</li>
        <li>Scrum e Kanban</li>
        <li>TDD e Continuous Integration</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>

      <h1>Eu posso ajudar</h1>

      <p>
        Se você tem um projeto que deseja iniciar, precisa da minha ajuda com algo ou simplesmente gosta de dizer oi, entre em contato.
      </p>

      <SocialLinks hideStyle={false} />
    </MainContent>
  );
}
