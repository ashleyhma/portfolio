class Homepage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
  
  
    render() {
      return (
        <div className="container">
          <h1>Ashley Ma</h1> 

          <h3>Projects</h3>

          <h3> Tech Stack</h3>
          
          
          
        </div> 
      );
    }
  }
  
  
ReactDOM.render(
  <Homepage />,
  document.getElementById('root')
);