import { motion } from "framer-motion";
import Floor from '../components/Floor';

function School() {
  return (
    <>
      <Floor/>
      <table>
        <thead>
          <th scope="col">Course</th>
          <th scope="col">Notes</th>
          <th scope="col">Grade</th>
        </thead>
        <tbody>
          <tr>
            <th scope="row">15213</th>
            <td>Computer Systems</td>
            <td>A</td>
          </tr>

          <tr>
            <th scope="row">15210</th>
            <td>Parallel Data Structure & Algorithms</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default School;