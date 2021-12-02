import React from "react";
import styles from "../HelpPage/HelpPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";

export default function HelpPage(props) {
  return (
    <div>
      <div className={styles.float_container}>
        <Header
          className={styles.headerWrapper}
          onLogoutAttempt={props.onLogoutAttempt}
        />
        <div className={styles.reportsPageComponentWrapper}>
          <p
            style={{
              fontSize: "80px",
              marginLeft: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            FAQs
          </p>
          <p style={{ marginLeft: "20px" }}>
            How do I assign a uniform to a student?
          </p>
          <p style={{ marginLeft: "40px" }}>
            To add a uniforms navigate to the Uniform Selection Page, Enter in the
            <br></br>
            required student info information or select a student whose
            information has been <br></br>
            previously entered from the select student dropdown. Feel free to add
            any notes<br></br>
            for the student. Then select the type of piece and click sort by best
            fit to find <br></br>
            the best fit for the student and then select the desired item(s) and
            click assign
          </p>
          <p style={{ marginLeft: "20px" }}>
            Can I search for or filter specific uniforms, or students?
          </p>
          <p style={{ marginLeft: "40px" }}>
            Yes, you can. Either on the reposts page or on the uniform selection
            page you can <br></br>
            search for or filter uniforms by hovering over the titles such as
            piece or ID, <br></br>
            then click on the three verticle dots and then click filter and enter
            in the name <br></br>
            for what you want to search for in the value box, and click enter. If
            you want to get <br></br>
            all of the options again refresh the page. This will also work for
            searching for students.
          </p>
          <p style={{ marginLeft: "20px" }}>
            I clicked hide column, how can I get it to show up again?
          </p>
          <p style={{ marginLeft: "40px" }}>
            getting back a hidden column is done by clicking the three verticle
            dots<br></br>
            next to the title of the column and then click show columns and then
            click<br></br>
            show all columns if you want all of the hidden columns to show up or
            select the column<br></br>
            that you ant to show up individually
          </p>
          <p style={{ marginLeft: "20px" }}>
            How can I Add a user to have access to the application?
          </p>
          <p style={{ marginLeft: "40px" }}>
            In order to add a user you have to go to the manage users page
            <br></br>
            Then enter in the users information and click add to add the user.
            <br></br>
            The user will then show up in the grid on the left side of the page.
          </p>
          <p style={{ marginLeft: "20px" }}>
            How do I unassign a uniform peice from a student?
          </p>
          <p style={{ marginLeft: "40px" }}>
            First go to the reports page and then find the peice that you want to
            unassign<br></br>
            then click the check box for that peice and click the unassign button.
          </p>
          <p style={{ marginLeft: "20px" }}>
            How can I download the uniform report?
          </p>
          <p style={{ marginLeft: "40px" }}>
            First go to the reports page and then click the export button on the
            top<br></br>
            of the chart, then you can download it as a csv file.
          </p>
          <p style={{ marginLeft: "20px" }}>How can I add a new uniform?</p>
          <p style={{ marginLeft: "40px", marginBottom: "60px" }}>
            To add a new unifrom go to the add uniform page and then select the{" "}
            <br></br>
            uniform type and the peice and then enter in the necessary
            measurements<br></br>
            available for the peice and then click add.
          </p>
        </div>
        <Footer className={styles.footerWrapper} />
      </div>
    </div>
  );
}
