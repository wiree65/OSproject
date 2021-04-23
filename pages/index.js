import { Fragment, useState, useEffect } from "react";

const General = (props) => {
  return (
    <Fragment>
      <div>
        <div className="container">
          <div className="column">
            <img
              src="/images/election.png"
              width="350px"
              height="auto"
              alt="profile picture"
            ></img>
            <h1 style={{ color: "#2874b4" }}>SMART VOTE</h1>

            <div className="column" style={{width:'60%'}}>
              <div>
                <label>Your Critizen ID</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="critizen identify.."
                />
                <label>Vote President</label>
                <select id="country" name="country">
                  <option value="" disabled selected>
                    Select your president
                  </option>
                  <option value="australia">Prayuth Janrai</option>
                  <option value="canada">thanathorn juangroongruangkit</option>
                  <option value="usa">Wirawat Jaiarree</option>
                </select>
              </div>
              <input type="submit" value="Submit" />
            </div>
           
          </div>
        </div>
      </div>
      <style jsx>{`
        input[type="text"],
        select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        input[type="submit"] {
          width: 100%;
          background-color: #1d8ae7;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type="submit"]:hover {
          background-color: #2874b4;
        }
        .row {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .column {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
        }
      `}</style>
    </Fragment>
  );
};

export default General;
