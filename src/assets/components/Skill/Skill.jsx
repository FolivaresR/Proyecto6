import React from 'react';

const SkillsSection = () => {
return (
  <div className="container mt-4">
    <h2>SKILLS</h2>
    <div className="row">
      <div className="col-md-3">
        <h4>FrondEnd</h4>
          <img src="html5.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="HTML5" />
          <img src="css.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="CSS3" />


                    <img src="javascript.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="JAVASCRIPT" />


      </div>
      <div className="col-md-3">
        <h4>BackEnd</h4>
        <img src="mongodb.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="MONGODB" />
                  <img src="firebase.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="FIREBASE" />
                            <img src="node.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="NODE" />

      </div>
      <div className="col-md-3">
        <h4>Herramientas</h4>
        <img src="Visual.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="VISUAL" />
        <img src="git.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="GIT" />

      </div>

      <div className='col-md-3'>
      <h4>FrameWords y Librerias</h4>
        <img src="react.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="REACT" />
        <img src="bootstrappp.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="BOOTSTRAP" />
                  <img src="jquery.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="JQUERY" />
      </div>

    </div>
  </div>
);
};

export default SkillsSection;