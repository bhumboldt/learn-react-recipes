import { screen } from "@testing-library/react";
import { renderWithStore } from "../../utils/test-utils"
import { SuccessSnackbar } from "./success-snackbar";

describe('error-snackbar', () => {
  it('should not render anything', () => {
    renderWithStore(<SuccessSnackbar />);

    const val = screen.queryByText('Success!');

    expect(val).toBeNull();
  });

  it('should render the error snackbar', () => {
    renderWithStore(<SuccessSnackbar />, {
      preloadedState: {
        app: {
          showSuccessSnackbar: true,
          successSnackbarText: 'Success!'
        }
      }
    });

    const snackbar = screen.queryByText('Success!');

    expect(snackbar).toBeTruthy();
  });

  it('should not display when there is text but the show flag is not set', () => {
    renderWithStore(<SuccessSnackbar />, {
      preloadedState: {
        app: {
          showSuccessSnackbar: false,
          successSnackbarText: 'Success!'
        }
      }
    });

    const snackbar = screen.queryByText('Success!');

    expect(snackbar).toBeNull();
  });
});