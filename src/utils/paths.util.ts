export enum OS {
    LINUX = "Linux",
    MACOS = "Mac OS",
    WINDOWS = "Windows",
}


/**
 * Tools about files or folders
 */



export function isWindows(): boolean {
    return getOS() === OS.WINDOWS;
}

export function platformPath(path: string): string {
    const modifiedPath = path.split('/').filter(e => e !== '.').join('/');
    return isWindows() ? windowsPath(modifiedPath) : modifiedPath;
}


export function windowsPath(path: string): string {
    return path.replace(/\//g, '\\').replace(/\\/g, '\\\\')
}


/**
 * Get the current OS
 * @returns {OS}
 */
export function getOS(): OS {
    let platform = process.platform;

    let macosPlatforms = ["MACINTOSH", "MACINTEL", "MACPPC", "MAC68K"];
    let windowsPlatforms = ["WIN32", "WIN64", "WINDOWS", "WINCE"];
    let os = null;

    if (macosPlatforms.indexOf(platform.toUpperCase()) !== -1) {
        os = OS.MACOS;
    } else if (windowsPlatforms.indexOf(platform.toUpperCase()) !== -1) {
        os = OS.WINDOWS;
    } else if (!os && /Linux/.test(platform)) {
        os = OS.LINUX;
    }

    return os;
}

/**
 * Replace a slash by an antislash
 * @param text
 * @returns {string}
 */
export function antislash(text: string): string {
    return text.split("/").join("\\");
}

/**
 * Check if the OS is windows transform the link with antislash
 * Else, returns the normal link
 * @param link
 * @returns {string}
 */
export function constructLink(link: string): string {
    return getOS() === OS.WINDOWS ? antislash(link) : link;
}

/**
 * Delete the last slash in a string
 * @param text
 * @returns {string}
 */
export function deleteLastSlash(text: string): string {
    const TEXT_REWORK = (text && constructLink(text)) || "";

    return TEXT_REWORK &&
        TEXT_REWORK[TEXT_REWORK.length - 1] === constructLink("/")
        ? TEXT_REWORK.slice(0, TEXT_REWORK.length - 1)
        : TEXT_REWORK;
}
