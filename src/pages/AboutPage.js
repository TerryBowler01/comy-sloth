import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
<PageHero title='about'/>
<Wrapper className='page section section-center'>
<img src={aboutImg} alt='nice desk'/>
<article>
  <div className='title'>
    <h2>Our Story</h2>
    <div className='underline'></div>
    <p>I'm baby coloring book gluten-free tattooed air plant slow-carb. Asymmetrical 90's af cloud bread praxis pabst. Banjo edison bulb 90's letterpress distillery. Fingerstache tattooed kitsch ugh vape.

Letterpress meh humblebrag cray, pour-over four dollar toast blackbird spyplane tbh heirloom beard chia 8-bit next level. Lyft jianbing live-edge aesthetic blog bespoke. Yes plz mukbang biodiesel pour-over, tbh yr vibecession craft beer thundercats cronut. Quinoa unicorn godard retro, microdosing big mood vinyl shabby chic skateboard chillwave man bun.</p>
  </div>
</article>
</Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
