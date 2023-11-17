import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1> Our Services </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Get Set</ServicesH2>
              <ServicesP> A simplified guide to get! set! go!!! </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2> Ease of Access </ServicesH2>
              <ServicesP> Login once to easily avail our services </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2> Premium Benefits </ServicesH2>
              <ServicesP> Unlock our special subsribtion that grants special features. </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services