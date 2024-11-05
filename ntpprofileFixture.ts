import { generateUniqueName } from "tests/utils";

interface ntpprofileFixture {
  profileName: string;
  profileDescription: string;
  list: string;
  searchParamKey: string;
}

const ntpprofileFixture: ntpprofileFixture = {
  profileName: generateUniqueName("test-ntp-ptofile1"),
  profileDescription: "Playwright Lorem Ipsum",
  list:"abc.com",
  searchParamKey: "ntpprofile"
};

 export default ntpprofileFixture;