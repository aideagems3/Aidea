import React,{useState,useEffect} from "react";
import axios from "axios";
import { Button,Card,Row,Col,Container,Navbar,Nav,Jumbotron,ProgressBar } from 'react-bootstrap';

const Icons = () => {

  const [img,setImg] = useState("https://www.freeiconspng.com/uploads/blue-up-file-circle-document-upload-icon-23.png") 
  
  const [picresult,setPicresult] = useState("https://static.vecteezy.com/system/resources/thumbnails/003/070/061/small/ai-artificial-intelligence-logo-artificial-intelligence-vector.jpg") 
  
  const [send,setSend] = useState(false)

  const [result,setResult] = useState([])

  const picinputHandler = (event) => {

        const reader = new FileReader();
        const imageFile = event.target.files[0];
        console.log("imageFile=",imageFile)
    
        // read base64 img
        reader.readAsDataURL(imageFile)
  
          // operate img after read base64 img
          reader.onload = () => {
            // read done or not
            if(reader.readyState === 2){
              // result base64 img (convert image file to base64 img)
              setImg(reader.result)
              console.log("reader.result",reader.result)
            }
          
        }
        
  }

  

  const resetpicHandler = () => {
    setImg("https://www.freeiconspng.com/uploads/blue-up-file-circle-document-upload-icon-23.png")
    setSend(false)
    setResult("")
    setPicresult("")
  }

  const submitpic = () => {

      const uploaddata = new FormData();
      if(img !== "https://www.freeiconspng.com/uploads/blue-up-file-circle-document-upload-icon-23.png" && img !=="" )
      {
        console.log("There is pic");
        uploaddata.append('Imagefromuser',img);
        uploaddata.append('Objects',null);
        uploaddata.append('Success',false);
        uploaddata.append('Time',null);
        uploaddata.append('Lat',null);
        uploaddata.append('Lng',null);
        // uploaddata.append('Boxespic',null);
        //why Img.name is error?
        // for (var pair of uploaddata.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }
      
        // header is missing?
        axios.post('http://127.0.0.1:8000/picwithmodel/imageformodelList/',uploaddata)

        .then((response)=> {
            setSend(true)
            console.log("response.data=",response.data);
            getresult(response.data.id);
            getpicresult();
            
          })
        .catch((error) =>  console.log(error))
      }
      
      else
        console.log("There is NO pic");
      
      
      const iterate_val=(Result) =>{
        console.log("First Result=",Result);
        
        // single qoutes to double qoutes
        const newResult=Result.replace(/'/g,'"');
        console.log("newResult=",newResult);

        // convert string to object
        let convert2obj=JSON.parse(newResult);
        console.log("First convert2obj=",convert2obj);
        console.log("type=",typeof convert2obj);

        // const removeNull=()=>{
        //   convert2obj.filter(x=>x !== null)
        // };
        // console.log("filter null=",convert2obj);

        //rename good==ลูกถ้วยสภาพปกติ
        const clone = (obj) => Object.assign({}, obj);

        const renameKey = (object, key, newKey) => {
          let clonedObj = clone(object);
          const targetKey = clonedObj[key];
          
          if (targetKey==null){
            console.log("skip null value");
            return object;
          }
          delete clonedObj[key];
          clonedObj[newKey] = targetKey;
          return clonedObj;
         
          
        };
        
        convert2obj = renameKey(convert2obj, 'good', 'ลูกถ้วยสภาพปกติ');
        convert2obj = renameKey(convert2obj, 'crack', 'ลูกถ้วยแตก,บิ่น');
        console.log("after changed key=",convert2obj); 
        console.log("type changed key=",typeof convert2obj); 

      
        // javascript object to array 
        const entries = Object.entries(convert2obj)
        console.log("entries=",entries);
        setResult(entries);
      }
     
     
      
      
      
      const getresult = (id) =>{
        // header is missing?
        axios.get(`http://127.0.0.1:8000/picwithmodel/imageformodelDetail/${id}`)

        .then((response)=>{
          console.log("response=",response)
          console.log("response.data.Objects=",response.data.Objects)
          iterate_val(response.data.Objects);
          
          
        })
        .catch((error) =>  console.log(error))
      }

      const getpicresult = () =>{
        setPicresult('http://127.0.0.1:8000/static/img/test.jpeg')
      }
  }

    return (
        <div style={{backgroundColor:"#F8F8F8"}}>
          <Navbar  className="justify-content-between" style={{backgroundColor:"#FFFFFF"}} expand="lg" >
         
              <Container  style={{backgroundColor:"#FFFFFF"}}>
                <Navbar.Brand href="/" >
                  <img
                    src="/AiDea_logo5.jpg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="AideaLogo"
                  />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                  <Nav fill variant="tabs" defaultActiveKey="#action2">
                    <Nav.Link href="#action1">Dashboard</Nav.Link>
                    <Nav.Link href="#action2">Project</Nav.Link>
                    <Nav.Link href="#action3">Help</Nav.Link>
                  </Nav>
                  <div className = "me-auto"></div>
                  <Nav>
                    <Nav.Link href="#action4" target="_blank">HomePage</Nav.Link>
                  </Nav>
                
                </Navbar.Collapse>
                
              </Container>
          </Navbar>    

          <Container style={{padding:20,marginTop:20}}>
            <br/>
            <h3 style={{textAlign:"left"}}>Create New Project</h3>
            <br/>
            
            <Row>
              <Col xs={12} md={12} lg={8} xl={8} style={{backgroundColor:"#FFFFFF",padding:10,marginTop:10}}>
              <h5 style={{textAlign:"left"}}>Project Name</h5>
                <Card style={{marginTop:10,marginBottom:10}}>
                  <Card.Body>
                    <Card.Text>PEAWBA22</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
          
              <Col xs={12} md={12} lg={4} xl={4} style={{backgroundColor:"#FFFFFF",padding:10,marginTop:10}}>
              <h5 style={{textAlign:"left"}}>Circuit-KM</h5>
                <Card style={{marginTop:10,marginBottom:10}}>
                  <Card.Body>
                    <Card.Text>80</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </Container>

          <Container style={{backgroundColor:"#F8F8F8",marginTop:10}}>
            {/* Inside Upload Photo */}
            <Row>
              <Col xs={12} md={12} lg={4} xl={4} style={{backgroundColor:"#F8F8F8",padding:10,marginTop:10}}>
              <Container style={{backgroundColor:"#FFFFFF",padding:10,marginTop:10}}>
                  <Card.Title>Upload Photo</Card.Title>
                  <Card style={{padding:10,margin:10}}>
                    <Card.Body >
                      <Card.Img varaint="top" src={img} alt="preview upload" />
                      <br/>
                      <Card.Title>Upload Image Here</Card.Title>
                      <Card.Text>To Use Image Processing</Card.Text>
                    
                        <div class="input-group">
                          <div class="custom-file">
                            <input type="file" onChange={(event)=>picinputHandler(event)} accept="image/*" class="custom-file-input" id="inputGroupFile01" variant="outline-warning"/>
                          </div>
                          
                          <div class="button-group">
                            
                            <div>
                              <Button onClick={()=>submitpic()} variant="outline-warning">Submit For Processing</Button>
                            </div>
                            <br/>
                            <div>
                              <Button onClick={()=>resetpicHandler()} variant="outline-primary" >Reset Your Image</Button>
                            </div>
                            
                          </div>
                        </div>
                    
                    </Card.Body>
                  </Card>
                </Container>
                <Container style={{backgroundColor:"#FFFFFF",padding:20,marginTop:10}}>
                  <Row>
                    <Col xs={12} md={12} lg={12} xl={12} style={{backgroundColor:"#FFFFFF"}}>
                    <Card.Title>Uploading Status</Card.Title>
                      <Card>
                        <Card.Body>
                          <h6 style={{textAlign:"left",marginTop:20}}>14 of 32 Photos</h6>
                          <ProgressBar now={60} />
                          <Button style={{padding:10,marginTop:20}} variant="outline-primary">Cancel</Button>
                        </Card.Body>
                      </Card>
                    </Col>            
                  </Row>
                </Container>
              </Col>
              
              <Col xs={12} md={12} lg={8} xl={8} style={{backgroundColor:"#F8F8F8",padding:10,marginTop:10}}>
                       
                <Container style={{backgroundColor:"#FFFFFF",padding:10,marginTop:10}}>                
                <Row style={{backgroundColor:"#FFFFFF",marginLeft:5,marginRight:5}}>
                  <Card.Title>Distribution System (22 KV)</Card.Title>
                    
                  <Col xs={12} md={12} lg={7} xl={7} style={{backgroundColor:"#FFFFFF"}}>
                        
                      <Card style={{marginBottom:10}}>
                          <Row>
                          <img src={picresult} alt="preview picresult"/>
                          </Row>
                        <Card.Body >
                        
                          {/* <Card.Img varaint="top" src={picresult} alt="preview picresult" /> */}
                          
                          <Card.Text>Take A Second For Your Result !</Card.Text>
                            <div>
                              <Button  variant="outline-success">Show Result</Button>
                            </div>
                          <br/>
                          <br/>
                          <Card.Title>
                          
                            <div>
                            <Card.Title>After Processing</Card.Title>
                            <h6>{send && <alert variant="info">Successfully Submit For Processing !</alert>}</h6>
                            </div>
                            <div>
                              <br/>
                              <Card.Text>Confidence Level Results : </Card.Text>
                              <ul>
                                {/* {result.map(el=>(<li key={el.id}> {el} % </li>))} */}
                              <Card.Text>{result.map(el=>(<li key={el.id}> {el.join("= ")} %  </li>))}</Card.Text>
                              </ul>
                              
                            </div>
                            <br/>
                            <br/>
                          </Card.Title>
                          
                          
                        </Card.Body>
                      </Card>
                    
                  </Col>
                  <Col xs={12} md={12} lg={5} xl={5} style={{backgroundColor:"#FFFFFF"}}>

                      <Card>
                          <Card.Body>
                            <Card.Title>Tower No.10050513</Card.Title>
                          </Card.Body>
                      </Card>
                    
                    <Container style={{backgroundColor:"#FFFFFF",padding:20,marginTop:10}}> 
                    <Row>
                      <Card.Title>หน่วยงาน</Card.Title>
                        <Card>
                          <Card.Body>
                            <Card.Text>สังกัด กฟส.อ.วชิรบารมี</Card.Text>
                            <Card.Text>สถานีไฟฟ้า วชิรบารมี</Card.Text>
                            <Card.Text>วงจร WBA22</Card.Text>
                            <Card.Text>จำนวน 80 วงจร-กม.</Card.Text>
                          </Card.Body>
                        </Card>            
                    </Row>                                
                    </Container>
                    <Container style={{backgroundColor:"#FFFFFF",padding:20,marginTop:10}}> 
                    <Row>
                      
                        <Card.Title>อุปกรณ์</Card.Title>
                        <Card>
                          <Card.Body>
                            <Card.Text>แรงดัน 22KV</Card.Text>
                            <Card.Text>ประเภท  ลูกถ้วยระบบจำหน่าย</Card.Text>
                            <div>
                              <Card.Text>สภาพการชำรุด : </Card.Text>
                              <ul>
                              <Card.Text>{result.map(el=>(<li key={el.id}> {el.join("= ")} %  </li>))}</Card.Text>
                              </ul>
                            </div>
                          </Card.Body>
                        </Card>
                      
                    </Row>                                
                    </Container>
                    <Container style={{backgroundColor:"#FFFFFF",padding:20,marginTop:10}}> 
                    <Row>
                      <Card.Title>พิกัด</Card.Title>
                        <Card>
                          <Card.Body>
                            <Card.Text>16.12345,100.54321</Card.Text>
                          </Card.Body>
                        </Card> 
                    </Row>                                
                    </Container>
                    
                  </Col>
                </Row>
                </Container>
                          
              </Col>
             
            </Row>
          </Container>

          

          <br/>
          <footer style={{textAlign:"center",backgroundColor:"rgb(240,240,240)",padding:20}}>
            Developed By <t/>
            <a href="/" target="_blank" style={{marginleft:4}}>AiDea</a>
          </footer>

          
          {/* <div>
            {send && <alert variant="info">Successfully Submit For Processing</alert>}
          </div> */}
          {/* <div>
            <label>
              Image :
              <input type="file"  onChange={(event)=>picinputHandler(event)} accept="image/*"/>
            </label>
          </div> */}
          {/* <div className="img-holder">
            <img src={img} alt="preview"/>
          </div> */}
          {/* <div className="img-holder">
            <img src={picresult} alt="picresult"/>
          </div>
          <div>
              {result && <h2>Result : {result}</h2>}
          </div> */}
          {/* <div>
            <button onClick={()=>submitpic()} variant="primary">Submit For Processing</button>
          </div>
          <div>
            <button onClick={()=>resetpicHandler()} variant="secondary">Reset Your Image</button>
          </div> */}
        
          
      </div>
    )
  
}
export default Icons;