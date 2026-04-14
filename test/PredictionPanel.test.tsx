/* 
    Author: Daniel Krutsick
    Purpose: PredictionPanel testing to make sure that the PredictionPanel always works without fail
    Test Cases:
        1. PredictionPanel
            This is whether the prediction panel shows up correctly and when it's not there, it doesn't show up
            If the panel is down, it should not be rendered, and if it is up, you should be able to find the different types and stats
        2. Coup Probability Banner
            This is to test to make sure that all the coup probability types get labeled correctly
            Should always show the correct risk rating given a value

    There has been more testing done manually. Some of these include testing to make sure that the predicition panel shows N/A
    and NULL values correctly. All of this is done in the prediction panel section so importing from coup prediction was hard to make
    test cases for such. There were luckily plenty of countries with no data in some of the sections, so this made it easy to do manually
    
        3. Null values and N/A values shown correctly
            Multiple countries were found to correctly display these values and nothing happened that harmed the website in anyway when
            there were presence of such values
            The bar, when applicable, also did not fill up and was blank for that section if a valued statistic was missing
*/

import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import PredictionPanel from "../src/components/PredictionPanel.tsx"
import type { CoupPrediction } from "../src/types/coup.ts"

const mockPrediction: CoupPrediction = {
  country: "Test Country",
  ccode: 100,
  year: 2024,
  month: 6,
  coup_attempt: 0,
  coup_successful: 0,
  coup_failed: 0,
  pce: 0.1,
  pce2: 0.01,
  pce3: 0.001,
  Leader_duration: 5,
  Leader_age: 55,
  closed_autocracy: 0,
  electoral_autocracy: 0,
  electoral_democracy: 1,
  liberal_democracy: 0,
  Democracy_level: 0.6,
  Democracy_squared: 0.36,
  Military_influence: 0,
  Military_regime: 0,
  region: 1,
  Women_political_participation: 0.5,
  women_polemp: 0.4,
  wom_civlib: 0.7,
  GDP_per_cap: 9.5,
  Change_GDP_per_cap: 0.02,
  Inflation: 4.5,
  Civil_wars: 0,
  Protests: 1,
  mobil_conc: 0.4,
  milex: 2.5,
  milper: 3,
  solqual: 2,
  Cold_war: 0,
  visit: 0,
  e_asia_pacific: 0,
  euro_cent_asia: 0,
  LA_carrib: 0,
  MENA: 0,
  N_america: 1,
  S_asia: 0,
  Sub_africa: 0,
  Trade: 60,
  neighboring_coup: 0,
  prediction_prob: 0.08,
};

const mockOnClose = () => {};

//Not all statistics being read, but generally all of them work if I can get the first few statistics rendered in
describe("PredictionPanel", () => {
    it("Renders country statistics", () =>{
        render(<PredictionPanel prediction={mockPrediction} onClose={mockOnClose} />);
        expect(screen.getByText("Test Country")).toBeInTheDocument();
        expect(screen.getByText(/2024/)).toBeInTheDocument();
        expect(screen.getByText(/Month 6/)).toBeInTheDocument();
    });

    it("Renders nothing when prediction is null", () =>{
        const {container} = render(<PredictionPanel prediction = {null} onClose={mockOnClose} />);
        expect(container).toBeEmptyDOMElement();
    });
});

describe("Coup Probability Banner" , () => {
    it("Shows Very Low Risk when probability under 0.05", () => {
        render(<PredictionPanel prediction={{ ...mockPrediction, prediction_prob: 0.03 }} onClose={mockOnClose} />);
        expect(screen.getByText("Very Low Risk")).toBeInTheDocument();
    });

    it("shows Moderate risk when prob is between 0.05 and 0.15", () => {
    render(<PredictionPanel prediction={{ ...mockPrediction, prediction_prob: 0.08 }} onClose={mockOnClose} />);
    expect(screen.getByText("Moderate Risk")).toBeInTheDocument();
  });

  it("shows High risk when prob is above 0.30", () => {
    render(<PredictionPanel prediction={{ ...mockPrediction, prediction_prob: 0.45 }} onClose={mockOnClose} />);
    expect(screen.getByText("High Risk")).toBeInTheDocument();
  });
});