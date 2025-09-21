import CoffeeCard from './CoffeeCard'

const CardBox = (props) => {
  return (
    <div className ="cardBox">
        <CoffeeCard name="Sawada Coffee" address="112 N Green St, Chicago, IL 60607" number="(312) 344-1750"/>
        <CoffeeCard name="The WormHole Coffee" address="1462 N Milwaukee Ave, Chicago, IL 60622" number="(773) 661-2468"/>
        <CoffeeCard name="ESPRESSO AND MILK" address="20 N Wacker Dr Suite 105, Chicago, IL 60606" number="no number"/>
        <CoffeeCard name="La Colombe Coffee Workshop" address="955 W Randolph St, Chicago, IL 60607" number="(312) 733-0707"/>
        <CoffeeCard name="Good Ambler" address="216 N Peoria St, Chicago, IL 60607" number="(312) 872-7165"/>
        <CoffeeCard name="Swadesi Cafe" address="328 S Jefferson St #120, Chicago, IL 60661" number="(708) 553-6350"/>
        <CoffeeCard name="Cupitol Coffee & Eatery" address="455 E Illinois St, Chicago, IL 60611" number="(312) 929-2065"/>
        <CoffeeCard name="Drip Collective" address="172 N Racine Ave, Chicago, IL 60607" number="no number"/>
        <CoffeeCard name="Ground Up Coffee & Bites" address="900 W Van Buren St, Chicago, IL 60607" number="(312) 374-1348"/>
        <CoffeeCard name="Blue Bottle Coffee" address="313 W Wolf Point Plaza, Chicago, IL 60654" number="(510) 661-3510"/>
    </div>
)
}
export default CardBox;