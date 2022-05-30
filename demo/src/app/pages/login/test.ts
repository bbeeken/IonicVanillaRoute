NativeBiometric.isAvailable().then(
  (result: AvailableResult) => {
    const isAvailable = result.isAvailable;
    const isFaceId = result.biometryType == BiometryType.FACE_ID;

    if (isAvailable) {
      // Get user's credentials
      NativeBiometric.getCredentials({
        server: "www.example.com",
      }).then((credentials: Credentials) => {
        // Authenticate using biometrics before logging the user in
        NativeBiometric.verifyIdentity({
          reason: "For easy log in",
          title: "Log in",
          subtitle: "Maybe add subtitle here?",
          description: "Maybe a description too?",
        }).then(
          () => {
            // Authentication successful
            this.login(credentials.username, credentials.password);
          },
          (error) => {
            // Failed to authenticate
          }
        );
      });
    }
  },
  (error) => {
    // Couldn't check availability
  }
);
