import { AxesDirective, AxisDirective, LinearGaugeComponent, PointerDirective, PointersDirective, RangeDirective, RangesDirective } from '@syncfusion/ej2-react-lineargauge';
import './App.css';

function App() {
  return (
    <div className="App">
      <LinearGaugeComponent>
      <AxesDirective>
            <AxisDirective line={ { height:350, width:7, color:'#4286f4' } }
             labelStyle={ { format: "{value}°C" } }>
            <PointersDirective>
              <PointerDirective value={80}></PointerDirective>
            </PointersDirective>
            <RangesDirective>
              <RangeDirective start={30} end={60}></RangeDirective>
              <RangeDirective start={60} end={90} color='#41f47f'></RangeDirective>
            </RangesDirective>
            </AxisDirective>
        
        </AxesDirective>
      </LinearGaugeComponent>
    </div>
  );
}

export default App;
