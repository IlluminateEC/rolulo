import {goto} from '$app/navigation';
import {AtprotoDohHandleResolver, BrowserOAuthClient, OAuthSession} from '@atproto/oauth-client-browser';

export const client = await BrowserOAuthClient.load({
  clientId: 'https://rolulo.pages.dev/atproto-metadata.json',
  handleResolver: new AtprotoDohHandleResolver(
      {dohEndpoint: 'https://cloudflare-dns.com/dns-query'})
});

client.addEventListener(
    'deleted',
    (
        event: CustomEvent<{sub: string}>,
        ) => {
      goto('/');
    },
);

const result = await client.init();

export let session: OAuthSession|undefined;

session = result?.session;

if (result) {
  console.log(`${result.session.sub} was restored (last active session)`);
}

export async function login(handle: string) {
  try {
    await client.signIn(handle, {
      prompt: 'none',
      signal: new AbortController().signal,
    });
  } catch (err) {
    console.log(
        'The user aborted the authorization process by navigating "back"');
  }
};