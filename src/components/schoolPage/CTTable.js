function CTTable() {
  return (
    <table>
      <caption>Selected courses: Cornell Tech</caption>
      <thead>
        <th scope="col">Course and Notes</th>
        <th scope="col">Grade</th>
      </thead>
      <tbody>
        <tr>
        {/* <th scope="row">15213</th> */}
          <td>Machine Learning Engineering</td>
          <td>Ongoing</td>
        </tr>
        <tr>
          <td>Security and Privacy</td>
          <td>Ongoing</td>
        </tr>
        <tr>
          <td>Virtual and Augmented Reality</td>
          <td>Ongoing</td>
        </tr>
        <tr>
          <td>Product Studio</td>
          <td>Ongoing</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CTTable;