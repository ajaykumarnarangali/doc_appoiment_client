import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux";

function Suggetion({ speciality }) {

  const [doctor, setDoctors] = useState([]);
  const { accessToken } = useSelector(state => state.auth);
  return (
    <div>Suggetion</div>
  )
}

export default React.memo(Suggetion)