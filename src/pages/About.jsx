import React from 'react';
import Header from '../components/Header';
import '../components/about.css';

function About() {
  return (
    <div className='body-about'>
      <nav>
        <Header />
      </nav>
      <div className='about-container'>
        <main className='main-about'>
          <div className='about-titles'>
            <h1>Curamazônia</h1>
            <h2>Sobre o projeto</h2>
          </div>
          <div className='aboutParagraph'>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos,
            qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
            quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,
            ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur?
            Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
            quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
            </p>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos,
            qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
            quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,
            ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur?
            Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
            quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;