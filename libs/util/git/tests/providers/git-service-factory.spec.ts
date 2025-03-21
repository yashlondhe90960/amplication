import { EnumGitProvider } from "../../src/types";
import { GithubService } from "../../src/providers/github/github.service";
import { GitFactory } from "../../src/git-factory";
import { mock } from "jest-mock-extended";

describe.skip("GitFactory", () => {
  const github = mock<GithubService>();
  let logger: any;

  beforeEach(() => {
    jest.clearAllMocks();
    logger = {
      info: jest.fn(),
      error: jest.fn(),
    };
  });
  describe("GitFactory.getProvider()", () => {
    it("should return an github service", () => {
      expect(
        GitFactory.getProvider(
          {
            provider: EnumGitProvider.Github,
            installationId: "123",
          },
          logger
        )
      ).toBe(github);
    });
    it("should throw error if source control dont exist", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      expect(() => gitServiceFactory.getService("GitNone")).toThrow(Error);
    });
  });
});
