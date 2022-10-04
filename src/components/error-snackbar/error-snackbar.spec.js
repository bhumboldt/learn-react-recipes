import { screen } from "@testing-library/react";
import { renderWithStore } from "../../utils/test-utils"
import { ErrorSnackbar } from "./error-snackbar"

describe('error-snackbar', () => {
  it('should not render anything', () => {
    renderWithStore(<ErrorSnackbar />);

    const val = screen.queryByText('Error occurred');

    expect(val).toBeNull();
  });

  it('should render the error snackbar', () => {
    renderWithStore(<ErrorSnackbar />, {
      preloadedState: {
        app: {
          showErrorSnackbar: true,
          errorSnackbarText: 'Error occurred'
        }
      }
    });

    const snackbar = screen.queryByText('Error occurred');

    expect(snackbar).toBeTruthy();
  });

  it('should not display when there is text but the show flag is not set', () => {
    renderWithStore(<ErrorSnackbar />, {
      preloadedState: {
        app: {
          showErrorSnackbar: false,
          errorSnackbarText: 'Error occurred'
        }
      }
    });

    const snackbar = screen.queryByText('Error occurred');

    expect(snackbar).toBeNull();
  });
});