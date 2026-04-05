// Author: Michelle Alcantara
// Descriptive Title: Coup Event Narrative Navigation and Integration
// Severity/Importance: Important - Users will encounter this feature frequently when interacting with coup events, and it is central to displaying detailed event information.
// Code: TC-NARR-001

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { vi, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import EventPopup from "./EventPopup";

vi.mock("../data/narratives", () => ({
  narratives: {
    CPV_BO2024D: { content: ["Test narrative"], references: [] },
    "CPV-BO2024D": { content: ["Test narrative"], references: [] },
  },
}));

test("Shows Read Full Narrative button when narrative exists", () => {
  const mockEvent = {
    id: "CPV-BO2024D",
    country: "Bolivia",
    outcome: "successful",
    date: "2024-06-26",
    description: "Test event",
  };

  render(
    <MemoryRouter>
      <EventPopup event={mockEvent} />
    </MemoryRouter>,
  );

  const button = screen.getByText("Read Full Narrative");
  expect(button).toBeInTheDocument();
});

// Instructions:
// 1. Click a coup marker on the map
// 2. Verify that the event popup appears
// 3. Confirm the presence of a "Read Full Narrative" button (if narrative exists)
// 4. Click the "Read Full Narrative" button
// 5. Verify navigation to the narrative page
// 6. Return to the map view
// 7. Click the same marker again to ensure it remains interactive

// Expected Results:
// The event popup appears when a coup marker is clicked
// "Read Full Narrative" button is displayed only for events with narrative content otherwise it says "Narrative Coming Soon"
// Clicking the button navigates to the correct narrative page
// The narrative page displays the correct content and references
// Returning to the map does not break marker interaction
// The same marker remains clickable after returning
