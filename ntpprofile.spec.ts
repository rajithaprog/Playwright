import { test, expect } from '@playwright/test';
import ntpprofileFixture from './ntpprofileFixture';
import RoutePaths from 'utils/RoutePaths';
import { goto, searchByName, waitForSelectorToAppearAndClick } from 'tests/utils';
import profileTypeVendorRulesMap from 'src/app/modules/build/profile/constants';
import { contains } from 'validator';

test.describe('ntp Profile', async () => {
    const {
        profileName, profileDescription, list,
        searchParamKey, 
      } = ntpprofileFixture; 

test('Create', async ({ page }) => {
    //Navigate to url
    // await page.goto('https://rajitha.qa.valtixinc.com:8090/');
    // await page.locator("#username");
    // await page.locator("button[value='default']");
    // await page.locator("#password");
    // await page.locator("button[value='default']");
    //Go to manage
    await goto(page, RoutePaths.ntpProfileDefault);
    //await page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > label:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click();
    //Go to NTP profile
    // await page.locator("div:nth-child(21) a:nth-child(1) div:nth-child(1) span:nth-child(1)").click();
    //Click on create button
    await page.locator("getByRole('button', { name: 'Create' })");
    //Enter name
    await page.locator("input[placeholder='Enter the Name']").fill(profileName);
    await page.locator("textarea[placeholder='Optional']").fill(profileDescription);
    await page.locator('input[name="inputValue"]').click()
    await page.locator("input[placeholder='Type a string.']").fill(list);
    await page.getByRole('button',{name:'Save'}).click()
    await page.getByText('OK').click();
})


test('Edit', async ({ page }) => { 
    await searchByName(page,
        RoutePaths.ntpProfileDefault,
        searchParamKey,
        profileName);
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.locator("input[placeholder='Enter the Name']").fill(profileName);
    // await page.locator("textarea[placeholder='Optional']").fill(profileDescription);
    // await page.locator('input[name="inputValue"]').click()
    // await page.locator("input[placeholder='Type a string.']").fill(list);
    // await page.getByRole('button',{name:'Save'}).click()
    // await page.getByText('OK').click();
    // await waitForSelectorToAppearAndClick(page.getByRole('gridcell').first());
    // await waitForSelectorToAppearAndClick(page.getByText("test-ntp-ptofile1"));
    await page.getByRole('row', { name: 'test-ntp-ptofile1-21025411-' }).getByRole('checkbox').click();
    await waitForSelectorToAppearAndClick(page.getByRole('button', { name: 'Actions' }));
    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.waitForTimeout(6000)
    page.locator("textarea[placeholder='Optional']").waitFor({state:'visible'})
    await page.locator("textarea[placeholder='Optional']").fill("test");
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByText('OK').click();
    
});

test('Clone', async ({ page }) => { 
    await searchByName(page,
        RoutePaths.ntpProfileDefault,
        searchParamKey,
        profileName);
    // await waitForSelectorToAppearAndClick(page.getByRole('gridcell').first());
    await waitForSelectorToAppearAndClick(page.getByText("test-ntp-ptofile1"));
    await waitForSelectorToAppearAndClick(page.getByRole('button', { name: 'Actions' }));
    await page.getByRole('menuitem', { name: 'Clone' }).click();
    // await page.waitForTimeout(6000)
    await page.locator("input[placeholder='Enter the Name']").fill(profileName);
    await page.getByRole('button', { name: 'Save', exact: true }).click()
    await page.getByText('OK').click();

});


test('Delete', async ({ page }) => { 
    await searchByName(page,
        RoutePaths.ntpProfileDefault,
        searchParamKey,
        profileName);
    await waitForSelectorToAppearAndClick(page.locator('input[name="selectall"]'));
    // Click actions
    await waitForSelectorToAppearAndClick(page.getByRole('button', { name: 'Actions' }));
    // Click delete
    await waitForSelectorToAppearAndClick(page.getByRole('menuitem', { name: 'Delete' }));
    // Confirm deletion
    await waitForSelectorToAppearAndClick(page.getByText('Yes', { exact: true }));
});
});