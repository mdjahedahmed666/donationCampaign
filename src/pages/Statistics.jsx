import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const Statistics = () => {
  const [myDonations, setMyDonations] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  const COLORS = ["#0088FE", "#00C49F"];

  useEffect(() => {
    const storedDonationCard =
      JSON.parse(localStorage.getItem("donatedCard")) || [];
    setMyDonations(storedDonationCard);

    fetch("/Fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalDonation(data);
      });
  }, []);
  const myDonationTotal = myDonations.length;
  const totalDonationCard = totalDonation.length;
  const myDonationsPercentage = (
    (myDonationTotal / totalDonationCard) *
    100
  ).toFixed(2);
  const remainingDonationsPercentage = (100 - myDonationsPercentage).toFixed(2);

  const data = [
    { name: "My donation", value: (myDonationTotal / totalDonationCard) * 100 },
    { name: "Remaining Donations", value: 100 - myDonationsPercentage },
  ];

  return (
    <div className="container mx-auto sm:px-10 md:px-32 flex justify-center">
      <div>
      <h2 className="text-2xl font-semibold mt-10 text-center">Donation Statistics</h2>
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          nameKey="name"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <p className="text-center mt-2 mb-10">
        My Donations: {myDonationTotal} (
        {((myDonationTotal / totalDonationCard) * 100).toFixed(2)}%)
        <br />
        Remaining Donations: {totalDonationCard - myDonationTotal} (
        {(
          ((totalDonationCard - myDonationTotal) / totalDonationCard) *
          100
        ).toFixed(2)}
        %)
      </p>
      </div>
    </div>
  );
};

export default Statistics;
