import logoLight from '../assets/UpperNav/logo-light.png';

/* darkmode Images */
import moonActive from '../assets/UpperNav/moon-active.png';
import moonInactive from '../assets/UpperNav/moon-inactive.png';
import sunActive from '../assets/UpperNav/sun-active.png';
import sunInactive from '../assets/UpperNav/sun-inactive.png';







function UpperNavigation() {
  
    return (
    <nav>
        <div>
            <img src={logoLight} alt="" />

            <div>
                <h3>Jhonwell Española</h3>
                <p></p>
            </div>
        </div>
        
        <div>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div>
                <img src={moonInactive} alt="" />
                <img src={sunInactive} alt="" />

                <div><img src={moonActive} alt="" /></div>
            </div>
        </div>
        
    </nav>
  )
}

export default UpperNavigation