import React, { useState } from 'react';
import './../Css/HtmlCourse.css';
import { Card,Button } from 'react-bootstrap';

const HtmlCourse = () => {
  const [selectedTopic, setSelectedTopic] = useState("Html Tutorial");
    

  const renderContent = () => {
    switch (selectedTopic) {
      case "Html Tutorial":
        return (
          <>
            <div className='p1'>
              <br></br><em style={{ backgroundColor: "yellow" }}>HTML</em> stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. It tells the web browser how to display text, links, images, and other forms of multimedia on a webpage. HTML sets up the basic structure of a website, and then CSS and JavaScript add style and interactivity to make it look and function better.
            </div>
            <br />
            <div className='p2'>
              <strong>How Does HTML Work?</strong> - HTML documents are plain-text files saved with an .html extension. Browsers read these documents, interpret the markup (tags and attributes), and render the formatted content on your screen.
              <br /><br />
              To know more about HTML features, history, advantages, etc. - refer to HTML Introduction.
            </div>
            <div>
              <img src='/images/himg1.png' alt="html illustration" style={{ width: '100%', marginTop: '20px' }} />
            </div><br></br>
            <div className='p2'>
              <strong>Why Learn HTML?</strong><br></br><br></br>
              Learning HTML is essential for various practical reasons:<br></br>

              <strong><em>Foundation of Web Development:</em></strong> HTML is the starting point for creating websites. Understanding HTML is crucial for any web development or web design role.<br></br><br></br>
              <strong><em>Universal Language of the Web:</em></strong>HTML is the standard markup language used to create the structure of web pages.Knowledge of HTML is necessary to manage any content on the Internet.<br></br><br></br>
              <strong><em>Easy to Learn:</em></strong> HTML is straightforward compared to programming languages. Beginners can quickly learn how to create basic websites with just HTML.<br></br> <br></br>
              <strong>Career Opportunities:  </strong> Proficiency in HTML opens up various career paths, including web developer, content manager, and UX/UI designer roles.<br></br> <br></br>
              <strong>Gateway to Advanced Technologies:</strong> Once you master HTML, you can easily move on to learn CSS, JavaScript, and other tools that enhance websites, making them more interactive and visually appealing.
            </div>


          </>
        );
      case "Html Introduction":
        return (<>
          <div className='p1'>
            <br></br><em style={{ backgroundColor: "yellow" }}>HTML</em>  stands for Hyper Text Markup Language, which is the core language used to structure content on the web. It organizes text, images, links, and media using tags and elements that browsers can interpret. As of 2025, over 95% of websites rely on HTML alongside CSS and JavaScript, making it a fundamental tool in modern web development.

            It is a markup language, not a programming language. This means it annotates text to define how it is structured and displayed by web browsers.
            It is a static language, meaning it does not inherently provide interactive features but can be combined with CSS for styling and JavaScript for interactivity.
          </div>
          <br />
          <div>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
              <li><code>&lt;!DOCTYPE html&gt;</code> - This is the document type declaration, not a tag. It declares that the document is an HTML5 document.</li>
              <li><code>&lt;html&gt;</code> - This is called the HTML root element. All other elements are contained within it.</li>
              <li>
                <code>&lt;head&gt;</code> - The head tag contains the "behind the scenes" elements for a webpage. Elements within the head aren't visible on the front end of a webpage. Typical elements inside the &lt;head&gt; include:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><code>&lt;title&gt;</code>: Defines the title displayed on the browser tab.</li>
                  <li><code>&lt;meta&gt;</code>: Provides information like the character set or viewport settings.</li>
                  <li><code>&lt;link&gt;</code>: Links external stylesheets or resources.</li>
                  <li><code>&lt;style&gt;</code>: Embeds internal CSS styles.</li>
                  <li><code>&lt;script&gt;</code>: Embeds JavaScript for functionality.</li>
                </ul>
              </li>
              <li><code>&lt;title&gt;</code> - The title is what is displayed on the top of your browser when you visit a website and contains the title of the webpage that you are viewing.</li>
              <li><code>&lt;h2&gt;</code> - The &lt;h2&gt; tag is a second-level heading tag.</li>
              <li><code>&lt;p&gt;</code> - The &lt;p&gt; tag represents a paragraph of text.</li>
              <li><code>&lt;body&gt;</code> - The body tag is used to enclose all the visible content of a webpage. In other words, the body content is what the browser will show on the front end.</li>
            </ul>

          </div>
          <div>
            <img src='/images/himg2.png' alt="html illustration" style={{ width: '700px', height: "500px", marginTop: '20px', marginLeft: '300px' }} />
          </div><br></br>
          <div className="text-gray-800 text-base space-y-4">
            <h2 className="text-xl font-semibold">Applications of HTML</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Web Development:</strong> HTML is the backbone of every webpage. It structures the content and integrates multimedia, hyperlinks, and more.</li>
              <li><strong>Web Applications:</strong> HTML, in combination with CSS and JavaScript, powers complex web applications (e.g., Google Docs, Trello).</li>
              <li><strong>Emails:</strong> HTML emails use table-based layouts and embedded media to deliver rich, interactive content.</li>
              <li><strong>Mobile App Development:</strong> HTML5 is used with frameworks like PhoneGap to build mobile apps for iOS and Android.</li>
            </ul>

            <h2 className="text-xl font-semibold">Limitations of HTML</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No Logic or Functionality:</strong> HTML cannot handle complex logic, interactivity, or dynamic content on its own. It requires JavaScript for such tasks.</li>
              <li><strong>SEO Limitations:</strong> While HTML provides structure, it’s not enough by itself for search engine optimization (SEO). Proper metadata and content structuring, as well as external SEO practices, are necessary.</li>
              <li><strong>Limited Styles:</strong> While HTML can handle basic styles via the style attribute, it is typically complemented by CSS for complex styling and layout.</li>
            </ul>
          </div>



        </>)
      case "Html Basics":
        return (<>

          <div className='p1'>
            <br></br><em style={{ backgroundColor: "yellow" }}>HTML</em> stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. It tells the web browser how to display text, links, images, and other forms of multimedia on a webpage. HTML sets up the basic structure of a website, and then CSS and JavaScript add style and interactivity to make it look and function better.
          </div>
          <br />
          <div className='p2'>
            <strong>HTML Basic Document and Structure</strong> <br></br>
            Every HTML document begins with a document type declaration, setting the foundation for the webpage. This section introduces basic HTML tags that structure the page, such as <code>&lt;head&gt;</code>,<code>&lt;body&gt;</code>, and <code>&lt;title&gt;</code>. Although this is not mandatory, it is a good convention to start the document with the below-mentioned tag.
            <br /><br />

          </div>
          <div>
            <img src='/images/himg3.png' alt="html illustration" style={{ width: '50%', marginTop: '20px', marginLeft: "300px" }} />
          </div><br></br>
          <div className='p2'>
            <img src='/images/himg4.png' alt="html illustration" style={{ width: '100%', marginTop: '20px' }} />
            <img src='/images/himg5.png' alt="html illustration" style={{ width: '100%', marginTop: '20px' }} />


          </div>


        </>

        )
      case "Html Comments":
        return (<>
          <div className='p1'>
            <br></br><em style={{ backgroundColor: "yellow" }}>Comments</em> HTML comments are used to add notes or explanations in the HTML code that are not displayed by the browser.

            They are useful for documenting the code, making it easier to understand and maintain.
            To add a comment, use the syntax <code>&lt;!--your comment here -- &gt;</code>.

            <img src='/images/himg6.png' alt="html illustration" style={{ width: '100%', marginTop: '20px' }} />


            In this example:

            The text within the <code>&lt;!--  and --  &gt;</code>tags will not appear on the webpage.
            These comments can include reminders, warnings, or explanations about the code, which can be useful for anyone reading or editing the HTML document.<br></br>
            Different Ways to Add Comments in HTML <br></br>
            There are two main ways to write comments in HTML:<br></br> single-line and multi-line comments. Both use the same basic syntax but differ in how they are implemented
          </div>
          <br />

        </>)
      case "Html Elements":
        return (<>

          <div className='p1'>
            <br></br><em style={{ backgroundColor: "yellow" }}>Elements</em> An HTML Element consists of a start tag, content, and an end tag, which together define the element's structure and functionality. Elements are the basic building blocks of a webpage and can represent different types of content, such as text, links, images, or headings.

            For example, the  <code>&lt;p &gt;</code>element for paragraphs includes opening and closing tags with text content in between.



            <img src='/images/himg6.png' alt="html illustration" style={{ width: '100%', marginTop: '20px' }} />


            <div className="text-gray-800 text-base space-y-4">
              <h2 className="text-xl font-semibold">Some Key Points About HTML Elements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Syntax:</strong>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>An opening tag indicates where the content begins: <code>&lt;tagname&gt;</code>.</li>
                    <li>A closing tag indicates where the content ends: <code>&lt;/tagname&gt;</code>.</li>
                    <li>The actual content resides between the opening and closing tags.</li>
                  </ul>
                </li>
                <li>
                  <strong>Case Sensitivity:</strong>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>HTML tags are not case-sensitive. For example, <code>&lt;B&gt;</code> and <code>&lt;b&gt;</code> both represent bold text.</li>
                    <li>However, it’s a best practice to use lowercase tags for consistency and readability.</li>
                  </ul>
                </li>
              </ul>

              <h2 className="text-xl font-semibold">Nested HTML Elements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Nested HTML Elements occur when one element is placed inside another, creating a hierarchical structure.
                  This structure is crucial for organizing content on web pages effectively, ensuring that different elements relate logically and visually to each other.
                </li>
              </ul>
            </div>
          </div>




        </>)
      case "Html Attributes":
        return (<>

          <div className='p1'>
            <br></br><em style={{ backgroundColor: "yellow" }}>HTML Attributes</em> are special words used within the opening tag of an HTML element. They provide additional information about HTML elements. HTML attributes are used to configure and adjust the element's behavior, appearance, or functionality in a variety of ways.

            Each attribute has a name and a value, formatted as name="value". Attributes tell the browser how to render the element or how it should behave during user interactions.

            Syntax:
            <code>&lt;tagname attribute_name="attribute_value" &gt;</code> content... <code>&lt;/tagname &gt;</code>

            <img src='/images/himg7.png' alt="html illustration" style={{ width: '50%', marginTop: '20px' }} />
            <div>In this example:

              Tag : <code>&lt;img&gt;</code>
              Attribute : src
              Value of Attribute : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWTFB6stAIxIg-Whfk6SNTWWl1uvWA6dV_A&s" <br></br><br></br>

              Purpose :<code>&lt;img&gt;</code> The tag is used for embedding images in an HTML page. The src attribute within the <code>&lt;img&gt;</code> tag specifies the path to the image file you wish to display. This attribute is crucial as it directs the browser to the image’s location on the internet or a local directory.<br></br>
              Components of Attribute
              An HTML attribute consists of two primary components:<br></br><br></br>

              1. <em style={{ backgroundColor: "yellow" }}>attribute_name:</em>This is the name of the attribute, which specifies what kind of additional information or property you are defining for the element. Common attribute names include href, src, class, id, etc.<br></br> <br></br>

              2.<em style={{ backgroundColor: "yellow" }}>attribute_value:</em>  The value is assigned to the attribute to define the specific setting or behavior. It is always placed in quotes. <br></br>

              Types of HTML Attributes
              HTML attributes can be broadly categorized based on their function and the type of elements they modify. For example -
            </div>
          </div>
          <br />



        </>)
      case "Html Headings":
        return <p>This is the HTML Headings content.</p>;
      case "Html Paragraphs":
        return <p>This is the HTML Paragraphs content.</p>;
      case "Html Tables":
        return <p>This is the HTML Tables content.</p>;
      case "Html List":
        return <p>This is the HTML List content.</p>;
      case "Html Images":
        return <p>This is the HTML Images content.</p>;
      case "Html Videos":
        return <p>This is the HTML Videos content.</p>;
      case "Html Iframes":
        return <p>This is the HTML Iframes content.</p>;
      case "Html Block elements":
        return <p>This is the HTML Block elements content.</p>;
      case "Html Inline elements":
        return <p>This is the HTML Inline elements content.</p>;
      case "Html Semantics":
        return <p>This is the HTML Semantics content.</p>;
      case "Html Forms":
        return <p>This is the HTML Forms content.</p>;
      case "Html Examples":
        return <p>This is the HTML Examples content.</p>;
      case "Reference Videos":
       return (
   <Card className="reference-card shadow-lg rounded-3 my-4 mx-auto" style={{ maxWidth: '960px' }}>
      <Card.Body className="text-center">
        <div className="video-wrapper mx-auto">
          <iframe
            width="100%"
            height="514"
            src="https://www.youtube.com/embed/HD13eq_Pmp8"
            title="Learn HTML in 1 hour 🌎"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  
  );
      default:
        return <p>Select a topic from the left menu.</p>;
    }
  };

  return (
    <div className="page-container">
      <div className="hdiv">
        <img
          src="/images/hicon.png"
          width="150px"
          height="150px"
          style={{ padding: "30px", borderRadius: "50%" }}
          alt="html"
        />
        <p className='hlink' onClick={() => setSelectedTopic("Html Tutorial")}>Html Tutorial</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Introduction")}>Html Introduction</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Basics")}>Html Basics</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Comments")}>Html Comments</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Elements")}>Html Elements</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Attributes")}>Html Attributes</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Headings")}>Html Headings</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Paragraphs")}>Html Paragraphs</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Tables")}>Html Tables</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html List")}>Html List</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Images")}>Html Images</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Videos")}>Html Videos</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Iframes")}>Html Iframes</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Block elements")}>Html Block elements</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Inline elements")}>Html Inline elements</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Semantics")}>Html Semantics</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Forms")}>Html Forms</p>
        <p className='hlink' onClick={() => setSelectedTopic("Html Examples")}>Html Examples</p>
        <p className='hlink' onClick={() => setSelectedTopic("Reference Videos")}>Reference Videos</p>

      </div>

      <div className="content-area">
        <h2>{selectedTopic}</h2>
        {renderContent()}
      </div>
      
    </div>
  );
};

export default HtmlCourse;
